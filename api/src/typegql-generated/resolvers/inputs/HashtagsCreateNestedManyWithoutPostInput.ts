import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyPostInputEnvelope } from "../inputs/HashtagsCreateManyPostInputEnvelope";
import { HashtagsCreateOrConnectWithoutPostInput } from "../inputs/HashtagsCreateOrConnectWithoutPostInput";
import { HashtagsCreateWithoutPostInput } from "../inputs/HashtagsCreateWithoutPostInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [HashtagsCreateWithoutPostInput], {
    nullable: true
  })
  create?: HashtagsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: HashtagsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagsCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagsCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagsWhereUniqueInput[] | undefined;
}
