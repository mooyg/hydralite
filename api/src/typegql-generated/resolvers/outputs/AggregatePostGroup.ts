import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostGroupCountAggregate } from "../outputs/PostGroupCountAggregate";
import { PostGroupMaxAggregate } from "../outputs/PostGroupMaxAggregate";
import { PostGroupMinAggregate } from "../outputs/PostGroupMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePostGroup {
  @TypeGraphQL.Field(_type => PostGroupCountAggregate, {
    nullable: true
  })
  _count!: PostGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => PostGroupMinAggregate, {
    nullable: true
  })
  _min!: PostGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => PostGroupMaxAggregate, {
    nullable: true
  })
  _max!: PostGroupMaxAggregate | null;
}
