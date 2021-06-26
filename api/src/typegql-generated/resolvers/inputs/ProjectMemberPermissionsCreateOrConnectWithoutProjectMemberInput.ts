import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectMemberInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberPermissionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectMemberInput, {
    nullable: false
  })
  create!: ProjectMemberPermissionsCreateWithoutProjectMemberInput;
}
