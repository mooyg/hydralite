import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateOrConnectWithoutMemberOfPostGroupsInput";
import { UserCreateWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateWithoutMemberOfPostGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutMemberOfPostGroupsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  create?: UserCreateWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutMemberOfPostGroupsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMemberOfPostGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
