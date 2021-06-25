import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectMemberInput";
import { ProjectMemberPermissionsUpdateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsUpdateWithoutProjectMemberInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsUpsertWithoutProjectMemberInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateWithoutProjectMemberInput, {
    nullable: false
  })
  update!: ProjectMemberPermissionsUpdateWithoutProjectMemberInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectMemberInput, {
    nullable: false
  })
  create!: ProjectMemberPermissionsCreateWithoutProjectMemberInput;
}
