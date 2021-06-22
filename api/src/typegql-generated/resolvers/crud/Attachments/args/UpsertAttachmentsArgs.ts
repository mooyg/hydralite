import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsCreateInput } from "../../../inputs/AttachmentsCreateInput";
import { AttachmentsUpdateInput } from "../../../inputs/AttachmentsUpdateInput";
import { AttachmentsWhereUniqueInput } from "../../../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: false
  })
  where!: AttachmentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttachmentsCreateInput, {
    nullable: false
  })
  create!: AttachmentsCreateInput;

  @TypeGraphQL.Field(_type => AttachmentsUpdateInput, {
    nullable: false
  })
  update!: AttachmentsUpdateInput;
}
