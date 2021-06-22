import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupOrderByInput } from "../../../inputs/ProjectGroupOrderByInput";
import { ProjectGroupWhereInput } from "../../../inputs/ProjectGroupWhereInput";
import { ProjectGroupWhereUniqueInput } from "../../../inputs/ProjectGroupWhereUniqueInput";
import { ProjectGroupScalarFieldEnum } from "../../../../enums/ProjectGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PostProjectGroupArgs {
  @TypeGraphQL.Field(_type => ProjectGroupWhereInput, {
    nullable: true
  })
  where?: ProjectGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectGroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "isCommunity" | "postId"> | undefined;
}
