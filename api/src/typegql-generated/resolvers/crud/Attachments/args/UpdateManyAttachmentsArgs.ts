import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsUpdateManyMutationInput } from "../../../inputs/AttachmentsUpdateManyMutationInput";
import { AttachmentsWhereInput } from "../../../inputs/AttachmentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAttachmentsArgs {
  @TypeGraphQL.Field(_type => AttachmentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttachmentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AttachmentsWhereInput, {
    nullable: true
  })
  where?: AttachmentsWhereInput | undefined;
}
