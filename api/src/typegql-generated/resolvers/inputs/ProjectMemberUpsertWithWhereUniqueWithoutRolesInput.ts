import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateWithoutRolesInput } from "../inputs/ProjectMemberCreateWithoutRolesInput";
import { ProjectMemberUpdateWithoutRolesInput } from "../inputs/ProjectMemberUpdateWithoutRolesInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpsertWithWhereUniqueWithoutRolesInput {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateWithoutRolesInput, {
    nullable: false
  })
  update!: ProjectMemberUpdateWithoutRolesInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutRolesInput, {
    nullable: false
  })
  create!: ProjectMemberCreateWithoutRolesInput;
}
