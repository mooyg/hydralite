import { IsBoolean, IsDate, Max, Min } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTaskArgs {
  @Field()
  @Min(1)
  @Max(200)
  name: string;

  @Field({ nullable: true })
  @Max(1000)
  description: string;

  @Field()
  coAuthorIds?: string[];

  @Field()
  projectId: string;

  @Field()
  taskBoardId: string;

  @Field()
  @IsDate()
  deadline?: Date;

  @Field()
  // TASK: validate min and max
  complexity: number;

  @Field()
  @Min(0)
  @Max(10)
  priority?: number;

  @Field()
  @IsBoolean()
  isOpenEndedTask?: boolean;

  @Field()
  @IsBoolean()
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
