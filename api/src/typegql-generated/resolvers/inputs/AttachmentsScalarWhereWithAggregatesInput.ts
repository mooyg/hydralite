import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAttachmentTypesWithAggregatesFilter } from "../inputs/EnumAttachmentTypesWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AttachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AttachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AttachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AttachmentsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  attachmentURL?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAttachmentTypesWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumAttachmentTypesWithAggregatesFilter | undefined;
}
