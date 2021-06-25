import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateWithoutPermissionsInput } from "../inputs/ProjectRoleCreateWithoutPermissionsInput";
import { ProjectRoleUpdateWithoutPermissionsInput } from "../inputs/ProjectRoleUpdateWithoutPermissionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpsertWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectRoleUpdateWithoutPermissionsInput, {
    nullable: false
  })
  update!: ProjectRoleUpdateWithoutPermissionsInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutPermissionsInput, {
    nullable: false
  })
  create!: ProjectRoleCreateWithoutPermissionsInput;
}
