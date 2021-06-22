import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCountAggregate } from "../outputs/PostCommentCountAggregate";
import { PostCommentMaxAggregate } from "../outputs/PostCommentMaxAggregate";
import { PostCommentMinAggregate } from "../outputs/PostCommentMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePostComment {
  @TypeGraphQL.Field(_type => PostCommentCountAggregate, {
    nullable: true
  })
  _count!: PostCommentCountAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentMinAggregate, {
    nullable: true
  })
  _min!: PostCommentMinAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentMaxAggregate, {
    nullable: true
  })
  _max!: PostCommentMaxAggregate | null;
}
