import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateWithoutProjectInput } from "../inputs/ProjectRoleCreateWithoutProjectInput";
import { ProjectRoleUpdateWithoutProjectInput } from "../inputs/ProjectRoleUpdateWithoutProjectInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectRoleUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectRoleCreateWithoutProjectInput;
}
