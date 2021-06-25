import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleScalarWhereInput } from "../inputs/ProjectRoleScalarWhereInput";
import { ProjectRoleUpdateManyMutationInput } from "../inputs/ProjectRoleUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateManyWithWhereWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => ProjectRoleScalarWhereInput, {
    nullable: false
  })
  where!: ProjectRoleScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectRoleUpdateManyMutationInput;
}
