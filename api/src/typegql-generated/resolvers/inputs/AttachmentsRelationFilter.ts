import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsWhereInput } from "../inputs/AttachmentsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsRelationFilter {
  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  is?: AttachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  isNot?: AttachmentsWhereInput | undefined;
}
