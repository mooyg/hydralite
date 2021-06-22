import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupWhereInput } from "../inputs/ProjectGroupWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupRelationFilter {
  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  is?: ProjectGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  isNot?: ProjectGroupWhereInput | undefined;
}
