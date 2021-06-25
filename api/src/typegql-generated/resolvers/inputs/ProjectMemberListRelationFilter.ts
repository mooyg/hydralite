import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberWhereInput } from "../inputs/ProjectMemberWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberListRelationFilter {
  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  every?: ProjectMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  some?: ProjectMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereInput, {
    nullable: true
  })
  none?: ProjectMemberWhereInput | undefined;
}
