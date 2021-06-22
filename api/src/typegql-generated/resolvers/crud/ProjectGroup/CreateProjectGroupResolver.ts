import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateProjectGroupArgs } from "./args/CreateProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class CreateProjectGroupResolver {
  @TypeGraphQL.Mutation(_returns => ProjectGroup, {
    nullable: false
  })
  async createProjectGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProjectGroupArgs): Promise<ProjectGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectGroup.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
