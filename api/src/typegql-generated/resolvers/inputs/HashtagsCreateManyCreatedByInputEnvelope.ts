import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsCreateManyCreatedByInput } from "../inputs/HashtagsCreateManyCreatedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HashtagsCreateManyCreatedByInputEnvelope {
  @TypeGraphQL.Field(_type => [HashtagsCreateManyCreatedByInput], {
    nullable: false
  })
  data!: HashtagsCreateManyCreatedByInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
