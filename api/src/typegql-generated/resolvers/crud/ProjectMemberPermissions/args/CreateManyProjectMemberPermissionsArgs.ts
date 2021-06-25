import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberPermissionsCreateManyInput } from "../../../inputs/ProjectMemberPermissionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectMemberPermissionsArgs {
  @TypeGraphQL.Field(_type => [ProjectMemberPermissionsCreateManyInput], {
    nullable: false
  })
  data!: ProjectMemberPermissionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
