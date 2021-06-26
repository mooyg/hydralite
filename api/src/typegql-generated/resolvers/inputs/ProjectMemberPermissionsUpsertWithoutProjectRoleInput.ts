import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectRoleInput";
import { ProjectMemberPermissionsUpdateWithoutProjectRoleInput } from "../inputs/ProjectMemberPermissionsUpdateWithoutProjectRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsUpsertWithoutProjectRoleInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateWithoutProjectRoleInput, {
    nullable: false
  })
  update!: ProjectMemberPermissionsUpdateWithoutProjectRoleInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectRoleInput, {
    nullable: false
  })
  create!: ProjectMemberPermissionsCreateWithoutProjectRoleInput;
}
