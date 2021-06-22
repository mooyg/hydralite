import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyProjectGroupInputEnvelope } from "../inputs/UserCreateManyProjectGroupInputEnvelope";
import { UserCreateOrConnectWithoutProjectGroupInput } from "../inputs/UserCreateOrConnectWithoutProjectGroupInput";
import { UserCreateWithoutProjectGroupInput } from "../inputs/UserCreateWithoutProjectGroupInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutProjectGroupInput } from "../inputs/UserUpdateManyWithWhereWithoutProjectGroupInput";
import { UserUpdateWithWhereUniqueWithoutProjectGroupInput } from "../inputs/UserUpdateWithWhereUniqueWithoutProjectGroupInput";
import { UserUpsertWithWhereUniqueWithoutProjectGroupInput } from "../inputs/UserUpsertWithWhereUniqueWithoutProjectGroupInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutProjectGroupInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutProjectGroupInput], {
    nullable: true
  })
  create?: UserCreateWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutProjectGroupInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutProjectGroupInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyProjectGroupInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyProjectGroupInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutProjectGroupInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutProjectGroupInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutProjectGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
