import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateWithoutPostInput } from "../inputs/HashtagsCreateWithoutPostInput";
import { HashtagsUpdateWithoutPostInput } from "../inputs/HashtagsUpdateWithoutPostInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagsUpdateWithoutPostInput, {
    nullable: false
  })
  update!: HashtagsUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => HashtagsCreateWithoutPostInput, {
    nullable: false
  })
  create!: HashtagsCreateWithoutPostInput;
}
