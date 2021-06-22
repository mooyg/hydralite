import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsUpdateWithoutCreatedByInput } from "../inputs/HashtagsUpdateWithoutCreatedByInput";
import { HashtagsWhereUniqueInput } from "../inputs/HashtagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsUpdateWithWhereUniqueWithoutCreatedByInput {
  @TypeGraphQL.Field(_type => HashtagsWhereUniqueInput, {
    nullable: false
  })
  where!: HashtagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => HashtagsUpdateWithoutCreatedByInput, {
    nullable: false
  })
  data!: HashtagsUpdateWithoutCreatedByInput;
}
