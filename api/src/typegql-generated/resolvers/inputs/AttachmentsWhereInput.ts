import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypesFilter } from "../inputs/EnumAttachmentTypesFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsWhereInput {
  @TypeGraphQL.Field(_type => [AttachmentsWhereInput], {
    nullable: true
  })
  AND?: AttachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsWhereInput], {
    nullable: true
  })
  OR?: AttachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsWhereInput], {
    nullable: true
  })
  NOT?: AttachmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  attachmentURL?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypesFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypesFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  Post?: PostListRelationFilter | undefined;
}
