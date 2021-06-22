import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateManyPostsInput } from "../inputs/ProjectGroupCreateManyPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateManyPostsInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectGroupCreateManyPostsInput], {
    nullable: false
  })
  data!: ProjectGroupCreateManyPostsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
