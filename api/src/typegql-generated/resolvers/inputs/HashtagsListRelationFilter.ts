import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsWhereInput } from "../inputs/HashtagsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsListRelationFilter {
  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  every?: HashtagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  some?: HashtagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => HashtagsWhereInput, {
    nullable: true
  })
  none?: HashtagsWhereInput | undefined;
}
