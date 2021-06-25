import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateWithoutAssignedMembersInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateOrConnectWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutAssignedMembersInput, {
    nullable: false
  })
  create!: ProjectRoleCreateWithoutAssignedMembersInput;
}
