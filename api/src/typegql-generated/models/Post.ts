import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attachments } from "../models/Attachments";
import { Hashtags } from "../models/Hashtags";
import { PostComment } from "../models/PostComment";
import { ProjectGroup } from "../models/ProjectGroup";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Post {
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

  postedby?: User;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  ProjectGroup?: ProjectGroup[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  files?: Attachments;

  comments?: Post;

  Post?: Post[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  PostComment?: PostComment[];

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  DownVotes!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  Upvotes!: bigint;

  Topics?: Hashtags[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentsId!: string;
}
