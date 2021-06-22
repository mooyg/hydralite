import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyCreatedByInputEnvelope } from "../inputs/HashtagsCreateManyCreatedByInputEnvelope";
import { HashtagsCreateOrConnectWithoutCreatedByInput } from "../inputs/HashtagsCreateOrConnectWithoutCreatedByInput";
import { HashtagsCreateWithoutCreatedByInput } from "../inputs/HashtagsCreateWithoutCreatedByInput";
import { HashtagsScalarWhereInput } from "../inputs/HashtagsScalarWhereInput";
import { HashtagsUpdateManyWithWhereWithoutCreatedByInput } from "../inputs/HashtagsUpdateManyWithWhereWithoutCreatedByInput";
import { HashtagsUpdateWithWhereUniqueWithoutCreatedByInput } from "../inputs/HashtagsUpdateWithWhereUniqueWithoutCreatedByInput";
import { HashtagsUpsertWithWhereUniqueWithoutCreatedByInput } from "../inputs/HashtagsUpsertWithWhereUniqueWithoutCreatedByInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [HashtagsCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: HashtagsCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: HashtagsCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  upsert?: HashtagsUpsertWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagsCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagsCreateManyCreatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  set?: HashtagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: HashtagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  delete?: HashtagsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true
  })
  update?: HashtagsUpdateWithWhereUniqueWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true
  })
  updateMany?: HashtagsUpdateManyWithWhereWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashtagsScalarWhereInput[] | undefined;
}
