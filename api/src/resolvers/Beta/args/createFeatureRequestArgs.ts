import { User } from "~/typegql-types/User";
import { Field, InputType } from "type-graphql";

@InputType()
export class createFeatureRequestArgs {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  projectId: string;

  @Field(() => String, { nullable: true })
  attachmentURL?: string;
}
