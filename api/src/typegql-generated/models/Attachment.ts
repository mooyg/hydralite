import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { AttachmentType } from "../enums/AttachmentType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Attachment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentURL!: string;

  @TypeGraphQL.Field(_type => AttachmentType, {
    nullable: false
  })
  type!: "image" | "video" | "other";

  post?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;
}
