import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyPostInputEnvelope } from "../inputs/HashtagsCreateManyPostInputEnvelope";
import { HashtagsCreateOrConnectWithoutPostInput } from "../inputs/HashtagsCreateOrConnectWithoutPostInput";
import { HashtagsCreateWithoutPostInput } from "../inputs/HashtagsCreateWithoutPostInput";
import { HashtagsScalarWhereInput } from "../inputs/HashtagsScalarWhereInput";
import { HashtagsUpdateManyWithWhereWithoutPostInput } from "../inputs/HashtagsUpdateManyWithWhereWithoutPostInput";
import { HashtagsUpdateWithWhereUniqueWithoutPostInput } from "../inputs/HashtagsUpdateWithWhereUniqueWithoutPostInput";
import { HashtagsUpsertWithWhereUniqueWithoutPostInput } from "../inputs/HashtagsUpsertWithWhereUniqueWithoutPostInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [HashtagsCreateWithoutPostInput], {
    nullable: true
  })
  create?: HashtagsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: HashtagsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: HashtagsUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagsCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagsCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [HashtagsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: HashtagsUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: HashtagsUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: HashtagsScalarWhereInput[] | undefined;
}
