import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCountAggregate } from "../outputs/ProjectRoleCountAggregate";
import { ProjectRoleMaxAggregate } from "../outputs/ProjectRoleMaxAggregate";
import { ProjectRoleMinAggregate } from "../outputs/ProjectRoleMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectRoleGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  linkedOpenEndedTasks!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => ProjectRoleCountAggregate, {
    nullable: true
  })
  _count!: ProjectRoleCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectRoleMinAggregate, {
    nullable: true
  })
  _min!: ProjectRoleMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectRoleMaxAggregate, {
    nullable: true
  })
  _max!: ProjectRoleMaxAggregate | null;
}
