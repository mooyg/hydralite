import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRolePermissionsCountAggregate } from "../outputs/ProjectRolePermissionsCountAggregate";
import { ProjectRolePermissionsMaxAggregate } from "../outputs/ProjectRolePermissionsMaxAggregate";
import { ProjectRolePermissionsMinAggregate } from "../outputs/ProjectRolePermissionsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProjectRolePermissions {
  @TypeGraphQL.Field(_type => ProjectRolePermissionsCountAggregate, {
    nullable: true
  })
  _count!: ProjectRolePermissionsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsMinAggregate, {
    nullable: true
  })
  _min!: ProjectRolePermissionsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectRolePermissionsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectRolePermissionsMaxAggregate | null;
}
