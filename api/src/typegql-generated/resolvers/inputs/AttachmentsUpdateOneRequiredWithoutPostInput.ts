import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsCreateOrConnectWithoutPostInput } from "../inputs/AttachmentsCreateOrConnectWithoutPostInput";
import { AttachmentsCreateWithoutPostInput } from "../inputs/AttachmentsCreateWithoutPostInput";
import { AttachmentsUpdateWithoutPostInput } from "../inputs/AttachmentsUpdateWithoutPostInput";
import { AttachmentsUpsertWithoutPostInput } from "../inputs/AttachmentsUpsertWithoutPostInput";
import { AttachmentsWhereUniqueInput } from "../inputs/AttachmentsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AttachmentsUpdateOneRequiredWithoutPostInput {
  @TypeGraphQL.Field(_type => AttachmentsCreateWithoutPostInput, {
    nullable: true
  })
  create?: AttachmentsCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: AttachmentsCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsUpsertWithoutPostInput, {
    nullable: true
  })
  upsert?: AttachmentsUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsWhereUniqueInput, {
    nullable: true
  })
  connect?: AttachmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsUpdateWithoutPostInput, {
    nullable: true
  })
  update?: AttachmentsUpdateWithoutPostInput | undefined;
}
