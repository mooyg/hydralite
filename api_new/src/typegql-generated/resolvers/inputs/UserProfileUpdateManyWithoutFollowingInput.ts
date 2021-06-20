import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutFollowingInput } from "../inputs/UserProfileCreateOrConnectWithoutFollowingInput";
import { UserProfileCreateWithoutFollowingInput } from "../inputs/UserProfileCreateWithoutFollowingInput";
import { UserProfileScalarWhereInput } from "../inputs/UserProfileScalarWhereInput";
import { UserProfileUpdateManyWithWhereWithoutFollowingInput } from "../inputs/UserProfileUpdateManyWithWhereWithoutFollowingInput";
import { UserProfileUpdateWithWhereUniqueWithoutFollowingInput } from "../inputs/UserProfileUpdateWithWhereUniqueWithoutFollowingInput";
import { UserProfileUpsertWithWhereUniqueWithoutFollowingInput } from "../inputs/UserProfileUpsertWithWhereUniqueWithoutFollowingInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateManyWithoutFollowingInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutFollowingInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutFollowingInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpsertWithWhereUniqueWithoutFollowingInput], {
    nullable: true
  })
  upsert?: UserProfileUpsertWithWhereUniqueWithoutFollowingInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserProfileUpdateWithWhereUniqueWithoutFollowingInput], {
    nullable: true
  })
  update?: UserProfileUpdateWithWhereUniqueWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpdateManyWithWhereWithoutFollowingInput], {
    nullable: true
  })
  updateMany?: UserProfileUpdateManyWithWhereWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProfileScalarWhereInput[] | undefined;
}
