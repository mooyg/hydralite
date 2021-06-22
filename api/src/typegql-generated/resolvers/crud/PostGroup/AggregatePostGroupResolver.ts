import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostGroupArgs } from "./args/AggregatePostGroupArgs";
import { PostGroup } from "../../../models/PostGroup";
import { AggregatePostGroup } from "../../outputs/AggregatePostGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostGroup)
export class AggregatePostGroupResolver {
  @TypeGraphQL.Query(_returns => AggregatePostGroup, {
    nullable: false
  })
  async aggregatePostGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostGroupArgs): Promise<AggregatePostGroup> {
    return getPrismaFromContext(ctx).postGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
