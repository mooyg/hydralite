import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutPostGroupsInput } from "../inputs/ProjectCreateWithoutPostGroupsInput";
import { ProjectUpdateWithoutPostGroupsInput } from "../inputs/ProjectUpdateWithoutPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutPostGroupsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutPostGroupsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutPostGroupsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutPostGroupsInput;
}
