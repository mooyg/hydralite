import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutPostGroupsInput } from "../inputs/PostCreateNestedManyWithoutPostGroupsInput";
import { UserCreateNestedManyWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateNestedManyWithoutMemberOfPostGroupsInput";
import { UserCreateNestedOneWithoutOwnedPostGroupsInput } from "../inputs/UserCreateNestedOneWithoutOwnedPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCommunity!: boolean;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnedPostGroupsInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutOwnedPostGroupsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutMemberOfPostGroupsInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutMemberOfPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutPostGroupsInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutPostGroupsInput | undefined;
}
