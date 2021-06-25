import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteProjectMemberPermissionsArgs } from "./args/DeleteProjectMemberPermissionsArgs";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class DeleteProjectMemberPermissionsResolver {
  @TypeGraphQL.Mutation(_returns => ProjectMemberPermissions, {
    nullable: true
  })
  async deleteProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
