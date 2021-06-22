import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsWhereInput } from "../../../inputs/AttachmentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  where?: AttachmentsWhereInput | undefined;
}
