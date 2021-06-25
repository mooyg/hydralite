import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleWhereInput } from "../inputs/ProjectRoleWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleRelationFilter {
  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  is?: ProjectRoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleWhereInput, {
    nullable: true
  })
  isNot?: ProjectRoleWhereInput | undefined;
}
