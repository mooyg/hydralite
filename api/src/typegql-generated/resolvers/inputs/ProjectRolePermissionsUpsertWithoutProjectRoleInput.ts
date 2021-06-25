import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRolePermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsCreateWithoutProjectRoleInput";
import { ProjectRolePermissionsUpdateWithoutProjectRoleInput } from "../inputs/ProjectRolePermissionsUpdateWithoutProjectRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsUpsertWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsUpdateWithoutProjectRoleInput, {
    nullable: false
  })
  update!: ProjectRolePermissionsUpdateWithoutProjectRoleInput;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsCreateWithoutProjectRoleInput, {
    nullable: false
  })
  create!: ProjectRolePermissionsCreateWithoutProjectRoleInput;
}
