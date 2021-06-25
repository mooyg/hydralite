import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyProjectMemberPermissionsArgs } from "./args/FindManyProjectMemberPermissionsArgs";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class FindManyProjectMemberPermissionsResolver {
  @TypeGraphQL.Query(_returns => [ProjectMemberPermissions], {
    nullable: false
  })
  async findManyProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
