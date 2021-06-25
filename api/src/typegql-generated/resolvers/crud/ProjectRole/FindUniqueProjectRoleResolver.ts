import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectRoleArgs } from "./args/FindUniqueProjectRoleArgs";
import { ProjectRole } from "../../../models/ProjectRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRole)
export class FindUniqueProjectRoleResolver {
  @TypeGraphQL.Query(_returns => ProjectRole, {
    nullable: true
  })
  async projectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectRoleArgs): Promise<ProjectRole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
