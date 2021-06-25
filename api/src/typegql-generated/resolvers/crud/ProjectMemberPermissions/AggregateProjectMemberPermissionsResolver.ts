import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectMemberPermissionsArgs } from "./args/AggregateProjectMemberPermissionsArgs";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { AggregateProjectMemberPermissions } from "../../outputs/AggregateProjectMemberPermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class AggregateProjectMemberPermissionsResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectMemberPermissions, {
    nullable: false
  })
  async aggregateProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectMemberPermissionsArgs): Promise<AggregateProjectMemberPermissions> {
    return getPrismaFromContext(ctx).projectMemberPermissions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
