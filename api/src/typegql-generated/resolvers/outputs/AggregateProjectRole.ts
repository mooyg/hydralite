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
export class AggregateProjectRole {
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
