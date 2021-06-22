import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyProjectGroupArgs } from "./args/FindManyProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class FindManyProjectGroupResolver {
  @TypeGraphQL.Query(_returns => [ProjectGroup], {
    nullable: false
  })
  async projectGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectGroupArgs): Promise<ProjectGroup[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectGroup.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
