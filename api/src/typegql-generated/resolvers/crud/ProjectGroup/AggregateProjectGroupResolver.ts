import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectGroupArgs } from "./args/AggregateProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { AggregateProjectGroup } from "../../outputs/AggregateProjectGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class AggregateProjectGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectGroup, {
    nullable: false
  })
  async aggregateProjectGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectGroupArgs): Promise<AggregateProjectGroup> {
    return getPrismaFromContext(ctx).projectGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
