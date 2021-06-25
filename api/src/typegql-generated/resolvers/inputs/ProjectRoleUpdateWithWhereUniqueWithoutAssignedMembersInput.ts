import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleUpdateWithoutAssignedMembersInput } from "../inputs/ProjectRoleUpdateWithoutAssignedMembersInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateWithWhereUniqueWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateWithoutAssignedMembersInput, {
    nullable: false
  })
  data!: ProjectRoleUpdateWithoutAssignedMembersInput;
}
