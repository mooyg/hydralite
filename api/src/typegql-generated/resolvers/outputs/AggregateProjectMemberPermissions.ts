import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCountAggregate } from "../outputs/ProjectMemberPermissionsCountAggregate";
import { ProjectMemberPermissionsMaxAggregate } from "../outputs/ProjectMemberPermissionsMaxAggregate";
import { ProjectMemberPermissionsMinAggregate } from "../outputs/ProjectMemberPermissionsMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProjectMemberPermissions {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCountAggregate, {
    nullable: true
  })
  _count!: ProjectMemberPermissionsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsMinAggregate, {
    nullable: true
  })
  _min!: ProjectMemberPermissionsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectMemberPermissionsMaxAggregate | null;
}
