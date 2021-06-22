import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateHashtagsArgs } from "./args/AggregateHashtagsArgs";
import { Hashtags } from "../../../models/Hashtags";
import { AggregateHashtags } from "../../outputs/AggregateHashtags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hashtags)
export class AggregateHashtagsResolver {
  @TypeGraphQL.Query(_returns => AggregateHashtags, {
    nullable: false
  })
  async aggregateHashtags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateHashtagsArgs): Promise<AggregateHashtags> {
    return getPrismaFromContext(ctx).hashtags.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
