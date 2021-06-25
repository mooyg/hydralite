import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateProjectMemberArgs } from "./args/UpdateProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class UpdateProjectMemberResolver {
  @TypeGraphQL.Mutation(_returns => ProjectMember, {
    nullable: true
  })
  async updateProjectMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProjectMemberArgs): Promise<ProjectMember | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMember.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
