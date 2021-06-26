import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectRoleInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsCreateOrConnectWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberPermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectRoleInput, {
    nullable: false
  })
  create!: ProjectMemberPermissionsCreateWithoutProjectRoleInput;
}
