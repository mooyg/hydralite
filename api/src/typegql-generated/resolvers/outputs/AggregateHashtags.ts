import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashtagsAvgAggregate } from "../outputs/HashtagsAvgAggregate";
import { HashtagsCountAggregate } from "../outputs/HashtagsCountAggregate";
import { HashtagsMaxAggregate } from "../outputs/HashtagsMaxAggregate";
import { HashtagsMinAggregate } from "../outputs/HashtagsMinAggregate";
import { HashtagsSumAggregate } from "../outputs/HashtagsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateHashtags {
  @TypeGraphQL.Field(_type => HashtagsCountAggregate, {
    nullable: true
  })
  _count!: HashtagsCountAggregate | null;

  @TypeGraphQL.Field(_type => HashtagsAvgAggregate, {
    nullable: true
  })
  _avg!: HashtagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => HashtagsSumAggregate, {
    nullable: true
  })
  _sum!: HashtagsSumAggregate | null;

  @TypeGraphQL.Field(_type => HashtagsMinAggregate, {
    nullable: true
  })
  _min!: HashtagsMinAggregate | null;

  @TypeGraphQL.Field(_type => HashtagsMaxAggregate, {
    nullable: true
  })
  _max!: HashtagsMaxAggregate | null;
}
