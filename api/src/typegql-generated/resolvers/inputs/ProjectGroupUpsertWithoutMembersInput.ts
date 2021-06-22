import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateWithoutMembersInput } from "../inputs/ProjectGroupCreateWithoutMembersInput";
import { ProjectGroupUpdateWithoutMembersInput } from "../inputs/ProjectGroupUpdateWithoutMembersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupUpsertWithoutMembersInput {
  @TypeGraphQL.Field(_type => ProjectGroupUpdateWithoutMembersInput, {
    nullable: false
  })
  update!: ProjectGroupUpdateWithoutMembersInput;

  @TypeGraphQL.Field(_type => ProjectGroupCreateWithoutMembersInput, {
    nullable: false
  })
  create!: ProjectGroupCreateWithoutMembersInput;
}
