import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRolePermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsCreateWithoutProjectRoleInput";
import { ProjectRolePermissionsWhereUniqueInput } from "../inputs/ProjectRolePermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsCreateOrConnectWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRolePermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateWithoutProjectRoleInput, {
    nullable: false
  })
  create!: ProjectRolePermissionsCreateWithoutProjectRoleInput;
}
