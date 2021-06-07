import { Field, InputType } from "type-graphql";

@InputType()
export class UserSignOnInput {
  @Field()
  ghAccessToken: string;
}
