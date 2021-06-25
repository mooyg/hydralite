import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateWithoutUserInput } from "../inputs/ProjectMemberCreateWithoutUserInput";
import { ProjectMemberUpdateWithoutUserInput } from "../inputs/ProjectMemberUpdateWithoutUserInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProjectMemberUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectMemberCreateWithoutUserInput;
}
