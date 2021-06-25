import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateManylinkedOpenEndedTasksInput } from "../inputs/ProjectRoleCreateManylinkedOpenEndedTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateManyProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionsId!: string;

  @TypeGraphQL.Field(_type => ProjectRoleCreateManylinkedOpenEndedTasksInput, {
    nullable: true
  })
  linkedOpenEndedTasks?: ProjectRoleCreateManylinkedOpenEndedTasksInput | undefined;
}
