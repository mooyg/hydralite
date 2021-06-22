import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { AttachmentTypes } from "../enums/AttachmentTypes";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Attachments {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  attachmentURL!: string;

  @TypeGraphQL.Field(_type => AttachmentTypes, {
    nullable: false
  })
  type!: "image" | "video" | "other";

  Post?: Post[];
}
