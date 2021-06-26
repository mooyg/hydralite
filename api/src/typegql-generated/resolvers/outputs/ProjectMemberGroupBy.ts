import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCountAggregate } from "../outputs/ProjectMemberCountAggregate";
import { ProjectMemberMaxAggregate } from "../outputs/ProjectMemberMaxAggregate";
import { ProjectMemberMinAggregate } from "../outputs/ProjectMemberMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectMemberGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  awaitingApproval!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectMemberPermissionsId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => ProjectMemberCountAggregate, {
    nullable: true
  })
  _count!: ProjectMemberCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberMinAggregate, {
    nullable: true
  })
  _min!: ProjectMemberMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMemberMaxAggregate, {
    nullable: true
  })
  _max!: ProjectMemberMaxAggregate | null;
}
