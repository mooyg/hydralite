import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Attachment } from "../models/Attachment";
import { Hashtag } from "../models/Hashtag";
import { PostComment } from "../models/PostComment";
import { PostGroup } from "../models/PostGroup";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Post {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAnnouncement!: boolean;

  postGroups?: PostGroup[];

  creator?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  creatorId!: string;

  comments?: PostComment[];

  attachments?: Attachment[];

  hashtags?: Hashtag[];
}
