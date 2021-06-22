import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertProjectGroupArgs } from "./args/UpsertProjectGroupArgs";
import { ProjectGroup } from "../../../models/ProjectGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectGroup)
export class UpsertProjectGroupResolver {
  @TypeGraphQL.Mutation(_returns => ProjectGroup, {
    nullable: false
  })
  async upsertProjectGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProjectGroupArgs): Promise<ProjectGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectGroup.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
