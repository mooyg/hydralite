import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  AND?: UserProfileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  OR?: UserProfileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  NOT?: UserProfileScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  avatarURL?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bio?: StringFilter | undefined;
}
