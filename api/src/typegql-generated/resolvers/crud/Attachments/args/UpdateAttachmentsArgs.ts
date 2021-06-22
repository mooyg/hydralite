import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsUpdateInput } from "../../../inputs/AttachmentsUpdateInput";
import { AttachmentsWhereUniqueInput } from "../../../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsUpdateInput, {
    nullable: false
  })
  data!: AttachmentsUpdateInput;

  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentsWhereUniqueInput;
}
