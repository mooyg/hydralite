import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupCreateManyInput } from "../../../inputs/PostGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostGroupArgs {
  @TypeGraphQL.Field(_type => [PostGroupCreateManyInput], {
    nullable: false
  })
  data!: PostGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
