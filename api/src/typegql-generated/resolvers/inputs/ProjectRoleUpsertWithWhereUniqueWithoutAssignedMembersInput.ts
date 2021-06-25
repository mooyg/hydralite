import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateWithoutAssignedMembersInput";
import { ProjectRoleUpdateWithoutAssignedMembersInput } from "../inputs/ProjectRoleUpdateWithoutAssignedMembersInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpsertWithWhereUniqueWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateWithoutAssignedMembersInput, {
    nullable: false
  })
  update!: ProjectRoleUpdateWithoutAssignedMembersInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutAssignedMembersInput, {
    nullable: false
  })
  create!: ProjectRoleCreateWithoutAssignedMembersInput;
}
