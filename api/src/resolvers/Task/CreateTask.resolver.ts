import { Task } from "~/typegql-types/Task";
import {
  Resolver,
  Mutation,
  UseMiddleware,
  InputType,
  Field,
  Ctx,
  Arg,
} from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { User } from "@prisma/client";
import { memberHasManageTasksPermisson } from "./validators/memberHasManageTasksPermisson.validator";
import { connectIdArray } from "~/util/connectIdArray";
@InputType()
export class CreateTaskInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  coAuthorIds?: string[];

  @Field()
  projectId: string;

  @Field()
  taskBoardId: string;

  @Field()
  deadline?: Date;

  @Field()
  complexity: number;

  @Field()
  isOpenEndedTask?: boolean;

  @Field()
  acceptingTaskRequiresApproval?: boolean; // only applicable if isOpenEndedTask is set to true

  @Field()
  rolesPermittedToAcceptTaskIds?: string[]; // only applicable if isOpenEndedTask is set to true

  @Field()
  assigneeIds?: string[]; // only applicable if isOpenEndedTask is set to false

  @Field()
  taskLocationIds?: string[];

  @Field()
  taskCategoryIds?: string[];

  @Field()
  attachmentIds?: string[];

  @Field()
  checklistIds?: string[];

  @Field()
  linkedBugReportIds?: string[];

  @Field()
  linkedFeatureRequestIds?: string[];

  @Field()
  duplicatedByTaskIds?: string[];

  @Field()
  waitlistedByTaskIds?: string[];

  @Field()
  waitlistingTaskIds?: string[];

  @Field()
  linkedCommitUrls: string[];

  @Field()
  linkedPrUrls: string[];
}

@Resolver()
export default class CreateTaskResolver {
  @Mutation(() => Task)
  @UseMiddleware(isAuthenticated)
  async createTask(
    @Arg("input") input: CreateTaskInput,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Task> {
    // extract the logged in user
    const user: User = (req as any).user;

    // validators
    await memberHasManageTasksPermisson(user.id, input.projectId);

    return executeOrFail<Task>(() => {
      type TaskData = Parameters<typeof prisma.task.create>[0]["data"];

      const task: TaskData = {
        name: input.name,
        description: input.description,
        deadline: input.deadline,
        isCompleted: false,
        isOpen: true,
        taskCompletedPercentage: 0,
        taskBoard: { connect: { id: input.taskBoardId } },
        author: { connect: { id: user.id } },
        coAuthors: connectIdArray(input.coAuthorIds),
        complexity: input.complexity,
        isOpenEndedTask: false,
        acceptingTaskRequiresApproval: false,
        rolesPermittedToAcceptTask: {},
        assignees: {},
        attachements: connectIdArray(input.attachmentIds),
        checklists: connectIdArray(input.checklistIds),
        duplicatedByTasks: connectIdArray(input.duplicatedByTaskIds),
        linkedBugReports: connectIdArray(input.linkedBugReportIds),
        linkedFeatureRequests: connectIdArray(input.linkedFeatureRequestIds),
        taskCategories: connectIdArray(input.taskCategoryIds),
        taskLocations: connectIdArray(input.taskLocationIds),
        waitlistedByTasks: connectIdArray(input.waitlistedByTaskIds),
        waitlistingTasks: connectIdArray(input.waitlistingTaskIds),
        linkedCommitUrls: input.linkedCommitUrls,
        linkedPrUrls: input.linkedPrUrls,
      };

      if (input.isOpenEndedTask) {
        task.isOpenEndedTask = true;

        task.acceptingTaskRequiresApproval =
          input.acceptingTaskRequiresApproval;

        task.rolesPermittedToAcceptTask = connectIdArray(
          input.rolesPermittedToAcceptTaskIds
        );
      } else {
        task.assignees = connectIdArray(input.assigneeIds);
      }

      return prisma.task.create({ data: task });
    });
  }
}
