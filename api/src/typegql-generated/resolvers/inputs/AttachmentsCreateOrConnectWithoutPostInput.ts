import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsCreateWithoutPostInput } from "../inputs/AttachmentsCreateWithoutPostInput";
import { AttachmentsWhereUniqueInput } from "../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentsCreateWithoutPostInput, {
    nullable: false
  })
  create!: AttachmentsCreateWithoutPostInput;
}
