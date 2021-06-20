import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileWhereInput } from "../inputs/UserProfileWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileListRelationFilter {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  every?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  some?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  none?: UserProfileWhereInput | undefined;
}
