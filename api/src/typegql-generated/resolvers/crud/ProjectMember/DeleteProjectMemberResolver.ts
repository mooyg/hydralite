import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteProjectMemberArgs } from "./args/DeleteProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class DeleteProjectMemberResolver {
  @TypeGraphQL.Mutation(_returns => ProjectMember, {
    nullable: true
  })
  async deleteProjectMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProjectMemberArgs): Promise<ProjectMember | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMember.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
