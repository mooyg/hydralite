import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsCountAggregate } from "../outputs/AttachmentsCountAggregate";
import { AttachmentsMaxAggregate } from "../outputs/AttachmentsMaxAggregate";
import { AttachmentsMinAggregate } from "../outputs/AttachmentsMinAggregate";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AttachmentsGroupBy {
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

  @TypeGraphQL.Field(_type => AttachmentsCountAggregate, {
    nullable: true
  })
  _count!: AttachmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentsMinAggregate, {
    nullable: true
  })
  _min!: AttachmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => AttachmentsMaxAggregate, {
    nullable: true
  })
  _max!: AttachmentsMaxAggregate | null;
}
