import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectRolePermissionsCreateManyInput } from "../../../inputs/ProjectRolePermissionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectRolePermissionsArgs {
  @TypeGraphQL.Field(_type => [ProjectRolePermissionsCreateManyInput], {
    nullable: false
  })
  data!: ProjectRolePermissionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
