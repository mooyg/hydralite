import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsCreateInput } from "../../../inputs/AttachmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsCreateInput, {
    nullable: false
  })
  data!: AttachmentsCreateInput;
}
