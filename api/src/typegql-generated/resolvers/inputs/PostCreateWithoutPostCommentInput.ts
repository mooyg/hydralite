import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttachmentsCreateNestedOneWithoutPostInput } from "../inputs/AttachmentsCreateNestedOneWithoutPostInput";
import { HashtagsCreateNestedManyWithoutPostInput } from "../inputs/HashtagsCreateNestedManyWithoutPostInput";
import { PostCreateNestedManyWithoutCommentsInput } from "../inputs/PostCreateNestedManyWithoutCommentsInput";
import { PostCreateNestedOneWithoutPostInput } from "../inputs/PostCreateNestedOneWithoutPostInput";
import { ProjectGroupCreateNestedManyWithoutPostsInput } from "../inputs/ProjectGroupCreateNestedManyWithoutPostsInput";
import { UserCreateNestedOneWithoutPostInput } from "../inputs/UserCreateNestedOneWithoutPostInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateWithoutPostCommentInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postedtime!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  DownVotes!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  Upvotes!: bigint;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostInput, {
    nullable: false
  })
  postedby!: UserCreateNestedOneWithoutPostInput;

  @TypeGraphQL.Field(_type => ProjectGroupCreateNestedManyWithoutPostsInput, {
    nullable: true
  })
  ProjectGroup?: ProjectGroupCreateNestedManyWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => AttachmentsCreateNestedOneWithoutPostInput, {
    nullable: false
  })
  files!: AttachmentsCreateNestedOneWithoutPostInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPostInput, {
    nullable: false
  })
  comments!: PostCreateNestedOneWithoutPostInput;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutCommentsInput, {
    nullable: true
  })
  Post?: PostCreateNestedManyWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => HashtagsCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  Topics?: HashtagsCreateNestedManyWithoutPostInput | undefined;
}
