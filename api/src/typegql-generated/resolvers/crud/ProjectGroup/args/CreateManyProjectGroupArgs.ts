import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectGroupCreateManyInput } from "../../../inputs/ProjectGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectGroupArgs {
  @TypeGraphQL.Field(_type => [ProjectGroupCreateManyInput], {
    nullable: false
  })
  data!: ProjectGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
