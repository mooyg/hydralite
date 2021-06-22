import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsCreateWithoutPostInput } from "../inputs/AttachmentsCreateWithoutPostInput";
import { AttachmentsUpdateWithoutPostInput } from "../inputs/AttachmentsUpdateWithoutPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => AttachmentsUpdateWithoutPostInput, {
    nullable: false
  })
  update!: AttachmentsUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => AttachmentsCreateWithoutPostInput, {
    nullable: false
  })
  create!: AttachmentsCreateWithoutPostInput;
}
