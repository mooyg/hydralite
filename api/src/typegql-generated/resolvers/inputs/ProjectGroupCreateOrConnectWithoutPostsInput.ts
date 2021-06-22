import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateWithoutPostsInput } from "../inputs/ProjectGroupCreateWithoutPostsInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectGroupCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ProjectGroupCreateWithoutPostsInput;
}
