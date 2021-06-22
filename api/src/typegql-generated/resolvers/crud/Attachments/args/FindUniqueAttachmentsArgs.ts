import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsWhereUniqueInput } from "../../../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentsWhereUniqueInput;
}
