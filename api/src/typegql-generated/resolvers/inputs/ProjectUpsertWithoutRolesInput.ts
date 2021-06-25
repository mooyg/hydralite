import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutRolesInput } from "../inputs/ProjectCreateWithoutRolesInput";
import { ProjectUpdateWithoutRolesInput } from "../inputs/ProjectUpdateWithoutRolesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutRolesInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutRolesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutRolesInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutRolesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutRolesInput;
}
