import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyPostInput } from "../inputs/HashtagsCreateManyPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [HashtagsCreateManyPostInput], {
    nullable: false
  })
  data!: HashtagsCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
