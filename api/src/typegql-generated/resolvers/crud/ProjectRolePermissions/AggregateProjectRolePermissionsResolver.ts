import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectRolePermissionsArgs } from "./args/AggregateProjectRolePermissionsArgs";
import { ProjectRolePermissions } from "../../../models/ProjectRolePermissions";
import { AggregateProjectRolePermissions } from "../../outputs/AggregateProjectRolePermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRolePermissions)
export class AggregateProjectRolePermissionsResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectRolePermissions, {
    nullable: false
  })
  async aggregateProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectRolePermissionsArgs): Promise<AggregateProjectRolePermissions> {
    return getPrismaFromContext(ctx).projectRolePermissions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
