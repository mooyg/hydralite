import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectMemberCreateManyInput } from "../../../inputs/ProjectMemberCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectMemberArgs {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateManyInput], {
    nullable: false
  })
  data!: ProjectMemberCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
