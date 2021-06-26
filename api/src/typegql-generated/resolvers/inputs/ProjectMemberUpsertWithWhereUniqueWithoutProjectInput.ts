import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateWithoutProjectInput } from "../inputs/ProjectMemberCreateWithoutProjectInput";
import { ProjectMemberUpdateWithoutProjectInput } from "../inputs/ProjectMemberUpdateWithoutProjectInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectMemberWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectMemberUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectMemberCreateWithoutProjectInput;
}
