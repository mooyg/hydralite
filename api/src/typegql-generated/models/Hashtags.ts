import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Hashtags {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  numofPosts!: bigint;

  createdBy?: User;

  Post?: Post | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
