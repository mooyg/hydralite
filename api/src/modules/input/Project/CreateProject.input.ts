import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateProjectInput {
  // TASK: replace with userId retrieval from session
  @Field()
  creatorId: string;

  @Field(() => Int)
  projectGhId: number;

  @Field()
  title: string;

  @Field()
  description?: string;

  @Field({ nullable: true })
  logoUrl?: string;

  @Field({ nullable: true })
  bannerUrl?: string;
}
