import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyFilesInput } from "../inputs/PostCreateManyFilesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyFilesInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyFilesInput], {
    nullable: false
  })
  data!: PostCreateManyFilesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
