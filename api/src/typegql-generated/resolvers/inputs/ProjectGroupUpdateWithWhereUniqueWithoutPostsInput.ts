import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupUpdateWithoutPostsInput } from "../inputs/ProjectGroupUpdateWithoutPostsInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupUpdateWithWhereUniqueWithoutPostsInput {
  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectGroupUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: ProjectGroupUpdateWithoutPostsInput;
}
