import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCreateManyProjectInput } from "../inputs/PostGroupCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [PostGroupCreateManyProjectInput], {
    nullable: false
  })
  data!: PostGroupCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
