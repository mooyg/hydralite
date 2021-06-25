import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateProjectMemberArgs } from "./args/CreateProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class CreateProjectMemberResolver {
  @TypeGraphQL.Mutation(_returns => ProjectMember, {
    nullable: false
  })
  async createProjectMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProjectMemberArgs): Promise<ProjectMember> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMember.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
