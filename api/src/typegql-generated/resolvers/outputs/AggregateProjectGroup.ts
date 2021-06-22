import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCountAggregate } from "../outputs/ProjectGroupCountAggregate";
import { ProjectGroupMaxAggregate } from "../outputs/ProjectGroupMaxAggregate";
import { ProjectGroupMinAggregate } from "../outputs/ProjectGroupMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProjectGroup {
  @TypeGraphQL.Field(_type => ProjectGroupCountAggregate, {
    nullable: true
  })
  _count!: ProjectGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectGroupMinAggregate, {
    nullable: true
  })
  _min!: ProjectGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectGroupMaxAggregate, {
    nullable: true
  })
  _max!: ProjectGroupMaxAggregate | null;
}
