import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateProjectRoleArgs } from "./args/CreateProjectRoleArgs";
import { ProjectRole } from "../../../models/ProjectRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectRole)
export class CreateProjectRoleResolver {
  @TypeGraphQL.Mutation(_returns => ProjectRole, {
    nullable: false
  })
  async createProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProjectRoleArgs): Promise<ProjectRole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
