import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsWhereInput } from "../inputs/ProjectMemberPermissionsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsRelationFilter {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  is?: ProjectMemberPermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereInput, {
    nullable: true
  })
  isNot?: ProjectMemberPermissionsWhereInput | undefined;
}
