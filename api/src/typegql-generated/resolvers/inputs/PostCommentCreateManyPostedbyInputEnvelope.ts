import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostedbyInput } from "../inputs/PostCommentCreateManyPostedbyInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCommentCreateManyPostedbyInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCommentCreateManyPostedbyInput], {
    nullable: false
  })
  data!: PostCommentCreateManyPostedbyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
