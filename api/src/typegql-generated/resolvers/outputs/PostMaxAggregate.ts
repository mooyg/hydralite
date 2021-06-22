import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  postedtime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  DownVotes!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  Upvotes!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attachmentsId!: string | null;
}
