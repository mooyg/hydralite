import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAttachmentTypesFilter } from "../inputs/NestedEnumAttachmentTypesFilter";
import { AttachmentTypes } from "../../enums/AttachmentTypes";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumAttachmentTypesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAttachmentTypesFilter, {
    nullable: true
  })
  not?: NestedEnumAttachmentTypesFilter | undefined;
}
