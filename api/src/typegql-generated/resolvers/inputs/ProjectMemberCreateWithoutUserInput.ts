import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutMembersInput } from "../inputs/ProjectCreateNestedOneWithoutMembersInput";
import { ProjectMemberPermissionsCreateNestedOneWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateNestedOneWithoutProjectMemberInput";
import { ProjectRoleCreateNestedManyWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateNestedManyWithoutAssignedMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  awaitingApproval!: boolean;

  @TypeGraphQL.Field(_type => ProjectRoleCreateNestedManyWithoutAssignedMembersInput, {
    nullable: true
  })
  roles?: ProjectRoleCreateNestedManyWithoutAssignedMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateNestedOneWithoutProjectMemberInput, {
    nullable: true
  })
  overallPermissions?: ProjectMemberPermissionsCreateNestedOneWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutMembersInput;
}
