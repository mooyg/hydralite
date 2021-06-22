import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyCreatedByInputEnvelope } from "../inputs/HashtagsCreateManyCreatedByInputEnvelope";
import { HashtagsCreateOrConnectWithoutCreatedByInput } from "../inputs/HashtagsCreateOrConnectWithoutCreatedByInput";
import { HashtagsCreateWithoutCreatedByInput } from "../inputs/HashtagsCreateWithoutCreatedByInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateNestedManyWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => [HashtagsCreateWithoutCreatedByInput], {
    nullable: true
  })
  create?: HashtagsCreateWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [HashtagsCreateOrConnectWithoutCreatedByInput], {
    nullable: true
  })
  connectOrCreate?: HashtagsCreateOrConnectWithoutCreatedByInput[] | undefined;

  @TypeGraphQL.Field(_type => HashtagsCreateManyCreatedByInputEnvelope, {
    nullable: true
  })
  createMany?: HashtagsCreateManyCreatedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [HashtagsWhereUniqueInput], {
    nullable: true
  })
  connect?: HashtagsWhereUniqueInput[] | undefined;
}
