import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFollowingInput } from "../inputs/UserProfileCreateOrConnectWithoutFollowingInput";
import { UserProfileCreateWithoutFollowingInput } from "../inputs/UserProfileCreateWithoutFollowingInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedManyWithoutFollowingInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutFollowingInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutFollowingInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput[] | undefined;
}
