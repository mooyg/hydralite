import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupUpdateManyMutationInput } from "../../../inputs/PostGroupUpdateManyMutationInput";
import { PostGroupWhereInput } from "../../../inputs/PostGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  where?: PostGroupWhereInput | undefined;
}
