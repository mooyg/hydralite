import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRoleCreateManyInput } from "../../../inputs/ProjectRoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectRoleArgs {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateManyInput], {
    nullable: false
  })
  data!: ProjectRoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
