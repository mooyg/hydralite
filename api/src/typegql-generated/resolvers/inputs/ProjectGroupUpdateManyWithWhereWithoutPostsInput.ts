import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupScalarWhereInput } from "../inputs/ProjectGroupScalarWhereInput";
import { ProjectGroupUpdateManyMutationInput } from "../inputs/ProjectGroupUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupUpdateManyWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => ProjectGroupScalarWhereInput, {
    nullable: false
  })
  where!: ProjectGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectGroupUpdateManyMutationInput;
}
