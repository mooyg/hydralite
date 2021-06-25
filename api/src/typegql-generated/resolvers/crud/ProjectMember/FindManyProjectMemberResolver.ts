import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyProjectMemberArgs } from "./args/FindManyProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class FindManyProjectMemberResolver {
  @TypeGraphQL.Query(_returns => [ProjectMember], {
    nullable: false
  })
  async projectMembers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectMemberArgs): Promise<ProjectMember[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMember.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
