import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  DownVotes!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  Upvotes!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentsId!: string;

  @TypeGraphQL.Field(_type => PostCountAggregate, {
    nullable: true
  })
  _count!: PostCountAggregate | null;

  @TypeGraphQL.Field(_type => PostAvgAggregate, {
    nullable: true
  })
  _avg!: PostAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostSumAggregate, {
    nullable: true
  })
  _sum!: PostSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMinAggregate, {
    nullable: true
  })
  _min!: PostMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMaxAggregate, {
    nullable: true
  })
  _max!: PostMaxAggregate | null;
}
