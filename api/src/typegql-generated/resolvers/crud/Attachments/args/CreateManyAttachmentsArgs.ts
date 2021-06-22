import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AttachmentsCreateManyInput } from "../../../inputs/AttachmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAttachmentsArgs {
  @TypeGraphQL.Field(_type => [AttachmentsCreateManyInput], {
    nullable: false
  })
  data!: AttachmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
