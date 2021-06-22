import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsUpdateWithoutPostInput } from "../inputs/HashtagsUpdateWithoutPostInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagsUpdateWithoutPostInput, {
    nullable: false
  })
  data!: HashtagsUpdateWithoutPostInput;
}
