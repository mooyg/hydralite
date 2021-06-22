import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPostedbyInput } from "../inputs/PostCreateManyPostedbyInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyPostedbyInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyPostedbyInput], {
    nullable: false
  })
  data!: PostCreateManyPostedbyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
