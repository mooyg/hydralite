import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberScalarWhereInput } from "../inputs/ProjectMemberScalarWhereInput";
import { ProjectMemberUpdateManyMutationInput } from "../inputs/ProjectMemberUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectMemberScalarWhereInput, {
    nullable: false
  })
  where!: ProjectMemberScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectMemberUpdateManyMutationInput;
}
