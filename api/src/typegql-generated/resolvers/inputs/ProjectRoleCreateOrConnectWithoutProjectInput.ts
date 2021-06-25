import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateWithoutProjectInput } from "../inputs/ProjectRoleCreateWithoutProjectInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectRoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectRoleCreateWithoutProjectInput;
}
