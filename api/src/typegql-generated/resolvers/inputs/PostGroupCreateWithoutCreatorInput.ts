import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedManyWithoutPostGroupsInput } from "../inputs/PostCreateNestedManyWithoutPostGroupsInput";
import { ProjectCreateNestedOneWithoutPostGroupsInput } from "../inputs/ProjectCreateNestedOneWithoutPostGroupsInput";
import { UserCreateNestedManyWithoutMemberOfPostGroupsInput } from "../inputs/UserCreateNestedManyWithoutMemberOfPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateWithoutCreatorInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutMemberOfPostGroupsInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutMemberOfPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutPostGroupsInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutPostGroupsInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutPostGroupsInput | undefined;
}
