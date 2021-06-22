import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostGroupOrderByInput } from "../../../inputs/PostGroupOrderByInput";
import { PostGroupWhereInput } from "../../../inputs/PostGroupWhereInput";
import { PostGroupWhereUniqueInput } from "../../../inputs/PostGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostGroupArgs {
  @TypeGraphQL.Field(_type => PostGroupWhereInput, {
    nullable: true
  })
  where?: PostGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostGroupOrderByInput], {
    nullable: true
  })
  orderBy?: PostGroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
