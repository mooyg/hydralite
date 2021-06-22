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
export class ProjectGroupGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCommunity!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

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
