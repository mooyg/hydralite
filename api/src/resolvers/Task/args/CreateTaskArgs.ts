import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskArgs {
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
