import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateWithoutOverallPermissionsInput";
import { ProjectMemberUpdateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberUpdateWithoutOverallPermissionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpsertWithoutOverallPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectMemberUpdateWithoutOverallPermissionsInput, {
    nullable: false
  })
  update!: ProjectMemberUpdateWithoutOverallPermissionsInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutOverallPermissionsInput, {
    nullable: false
  })
  create!: ProjectMemberCreateWithoutOverallPermissionsInput;
}
