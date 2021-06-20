import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFollowersInput } from "../inputs/UserProfileCreateOrConnectWithoutFollowersInput";
import { UserProfileCreateWithoutFollowersInput } from "../inputs/UserProfileCreateWithoutFollowersInput";
import { UserProfileScalarWhereInput } from "../inputs/UserProfileScalarWhereInput";
import { UserProfileUpdateManyWithWhereWithoutFollowersInput } from "../inputs/UserProfileUpdateManyWithWhereWithoutFollowersInput";
import { UserProfileUpdateWithWhereUniqueWithoutFollowersInput } from "../inputs/UserProfileUpdateWithWhereUniqueWithoutFollowersInput";
import { UserProfileUpsertWithWhereUniqueWithoutFollowersInput } from "../inputs/UserProfileUpsertWithWhereUniqueWithoutFollowersInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateManyWithoutFollowersInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutFollowersInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutFollowersInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpsertWithWhereUniqueWithoutFollowersInput], {
    nullable: true
  })
  upsert?: UserProfileUpsertWithWhereUniqueWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  set?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  delete?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpdateWithWhereUniqueWithoutFollowersInput], {
    nullable: true
  })
  update?: UserProfileUpdateWithWhereUniqueWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpdateManyWithWhereWithoutFollowersInput], {
    nullable: true
  })
  updateMany?: UserProfileUpdateManyWithWhereWithoutFollowersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProfileScalarWhereInput[] | undefined;
}
