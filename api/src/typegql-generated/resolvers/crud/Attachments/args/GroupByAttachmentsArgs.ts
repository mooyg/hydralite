import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsOrderByInput } from "../../../inputs/AttachmentsOrderByInput";
import { AttachmentsScalarWhereWithAggregatesInput } from "../../../inputs/AttachmentsScalarWhereWithAggregatesInput";
import { AttachmentsWhereInput } from "../../../inputs/AttachmentsWhereInput";
import { AttachmentsScalarFieldEnum } from "../../../../enums/AttachmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  where?: AttachmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsOrderByInput], {
    nullable: true
  })
  orderBy?: AttachmentsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttachmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "attachmentURL" | "type">;

  @TypeGraphQL.Field(_type => AttachmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AttachmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
