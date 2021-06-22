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
export class PostCommentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachments!: string;

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
