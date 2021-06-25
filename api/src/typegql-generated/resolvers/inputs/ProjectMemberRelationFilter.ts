import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberWhereInput } from "../inputs/ProjectMemberWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberRelationFilter {
  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  is?: ProjectMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  isNot?: ProjectMemberWhereInput | undefined;
}
