import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectRoleArgs } from "./args/AggregateProjectRoleArgs";
import { ProjectRole } from "../../../models/ProjectRole";
import { AggregateProjectRole } from "../../outputs/AggregateProjectRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRole)
export class AggregateProjectRoleResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectRole, {
    nullable: false
  })
  async aggregateProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectRoleArgs): Promise<AggregateProjectRole> {
    return getPrismaFromContext(ctx).projectRole.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
