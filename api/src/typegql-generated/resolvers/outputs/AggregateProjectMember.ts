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
export class AggregateProjectMember {
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
