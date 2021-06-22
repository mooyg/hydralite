import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectGroupArgs } from "./args/FindUniqueProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class FindUniqueProjectGroupResolver {
  @TypeGraphQL.Query(_returns => ProjectGroup, {
    nullable: true
  })
  async projectGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectGroupArgs): Promise<ProjectGroup | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectGroup.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
