import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFollowersInput } from "../inputs/UserProfileCreateOrConnectWithoutFollowersInput";
import { UserProfileCreateWithoutFollowersInput } from "../inputs/UserProfileCreateWithoutFollowersInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedManyWithoutFollowersInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutFollowersInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutFollowersInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput[] | undefined;
}
