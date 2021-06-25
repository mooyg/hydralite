import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateWithoutOverallPermissionsInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateOrConnectWithoutOverallPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutOverallPermissionsInput, {
    nullable: false
  })
  create!: ProjectMemberCreateWithoutOverallPermissionsInput;
}
