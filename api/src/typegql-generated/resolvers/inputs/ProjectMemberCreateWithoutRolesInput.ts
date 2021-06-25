import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutMembersInput } from "../inputs/ProjectCreateNestedOneWithoutMembersInput";
import { UserCreateNestedOneWithoutAllProjectsInput } from "../inputs/UserCreateNestedOneWithoutAllProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateWithoutRolesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  awaitingApproval!: boolean;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutMembersInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutMembersInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAllProjectsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAllProjectsInput;
}
