import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateOrConnectWithoutMemberOfPostGroupsInput";
import { UserCreateWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateWithoutMemberOfPostGroupsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateManyWithWhereWithoutMemberOfPostGroupsInput";
import { UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput";
import { UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutMemberOfPostGroupsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  create?: UserCreateWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
