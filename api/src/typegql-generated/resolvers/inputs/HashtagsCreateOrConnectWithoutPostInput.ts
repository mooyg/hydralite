import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateWithoutPostInput } from "../inputs/HashtagsCreateWithoutPostInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagsCreateWithoutPostInput, {
    nullable: false
  })
  create!: HashtagsCreateWithoutPostInput;
}
