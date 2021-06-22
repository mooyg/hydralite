import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateWithoutMembersInput } from "../inputs/ProjectGroupCreateWithoutMembersInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateOrConnectWithoutMembersInput {
  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectGroupCreateWithoutMembersInput, {
    nullable: false
  })
  create!: ProjectGroupCreateWithoutMembersInput;
}
