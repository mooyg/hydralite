import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAttachmentTypesFilter } from "../inputs/NestedEnumAttachmentTypesFilter";
import { NestedEnumAttachmentTypesWithAggregatesFilter } from "../inputs/NestedEnumAttachmentTypesWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAttachmentTypesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => AttachmentTypes, {
    nullable: true
  })
  equals?: "image" | "video" | "other" | undefined;

  @TypeGraphQL.Field(_type => [AttachmentTypes], {
    nullable: true
  })
  in?: Array<"image" | "video" | "other"> | undefined;

  @TypeGraphQL.Field(_type => [AttachmentTypes], {
    nullable: true
  })
  notIn?: Array<"image" | "video" | "other"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAttachmentTypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypesFilter, {
    nullable: true
  })
  _min?: NestedEnumAttachmentTypesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypesFilter, {
    nullable: true
  })
  _max?: NestedEnumAttachmentTypesFilter | undefined;
}
