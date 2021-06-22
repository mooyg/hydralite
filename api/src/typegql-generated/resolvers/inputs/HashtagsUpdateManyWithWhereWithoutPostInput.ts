import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsScalarWhereInput } from "../inputs/HashtagsScalarWhereInput";
import { HashtagsUpdateManyMutationInput } from "../inputs/HashtagsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => HashtagsScalarWhereInput, {
    nullable: false
  })
  where!: HashtagsScalarWhereInput;

  @TypeGraphQL.Field(_type => HashtagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: HashtagsUpdateManyMutationInput;
}
