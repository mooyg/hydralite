import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupScalarWhereInput } from "../inputs/PostGroupScalarWhereInput";
import { PostGroupUpdateManyMutationInput } from "../inputs/PostGroupUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateManyWithWhereWithoutMembersInput {
  @TypeGraphQL.Field(_type => PostGroupScalarWhereInput, {
    nullable: false
  })
  where!: PostGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => PostGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostGroupUpdateManyMutationInput;
}
