import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutProjectGroupInput } from "../inputs/PostCreateNestedOneWithoutProjectGroupInput";
import { UserCreateNestedManyWithoutProjectGroupInput } from "../inputs/UserCreateNestedManyWithoutProjectGroupInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutProjectGroupInput, {
    nullable: true
  })
  members?: UserCreateNestedManyWithoutProjectGroupInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutProjectGroupInput, {
    nullable: false
  })
  posts!: PostCreateNestedOneWithoutProjectGroupInput;
}
