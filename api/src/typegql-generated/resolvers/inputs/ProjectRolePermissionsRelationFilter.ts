import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRolePermissionsWhereInput } from "../inputs/ProjectRolePermissionsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRolePermissionsRelationFilter {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  is?: ProjectRolePermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsWhereInput, {
    nullable: true
  })
  isNot?: ProjectRolePermissionsWhereInput | undefined;
}
