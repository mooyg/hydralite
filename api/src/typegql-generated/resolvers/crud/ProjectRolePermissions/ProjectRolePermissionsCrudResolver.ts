import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectRolePermissionsArgs } from "./args/AggregateProjectRolePermissionsArgs";
import { CreateManyProjectRolePermissionsArgs } from "./args/CreateManyProjectRolePermissionsArgs";
import { CreateProjectRolePermissionsArgs } from "./args/CreateProjectRolePermissionsArgs";
import { DeleteManyProjectRolePermissionsArgs } from "./args/DeleteManyProjectRolePermissionsArgs";
import { DeleteProjectRolePermissionsArgs } from "./args/DeleteProjectRolePermissionsArgs";
import { FindFirstProjectRolePermissionsArgs } from "./args/FindFirstProjectRolePermissionsArgs";
import { FindManyProjectRolePermissionsArgs } from "./args/FindManyProjectRolePermissionsArgs";
import { FindUniqueProjectRolePermissionsArgs } from "./args/FindUniqueProjectRolePermissionsArgs";
import { GroupByProjectRolePermissionsArgs } from "./args/GroupByProjectRolePermissionsArgs";
import { UpdateManyProjectRolePermissionsArgs } from "./args/UpdateManyProjectRolePermissionsArgs";
import { UpdateProjectRolePermissionsArgs } from "./args/UpdateProjectRolePermissionsArgs";
import { UpsertProjectRolePermissionsArgs } from "./args/UpsertProjectRolePermissionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProjectRolePermissions } from "../../../models/ProjectRolePermissions";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProjectRolePermissions } from "../../outputs/AggregateProjectRolePermissions";
import { ProjectRolePermissionsGroupBy } from "../../outputs/ProjectRolePermissionsGroupBy";

@TypeGraphQL.Resolver(_of => ProjectRolePermissions)
export class ProjectRolePermissionsCrudResolver {
  @TypeGraphQL.Query(_returns => ProjectRolePermissions, {
    nullable: true
  })
  async findUniqueProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectRolePermissionsArgs): Promise<ProjectRolePermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectRolePermissions, {
    nullable: true
  })
  async findFirstProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectRolePermissionsArgs): Promise<ProjectRolePermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectRolePermissions], {
    nullable: false
  })
  async findManyProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectRolePermissionsArgs): Promise<ProjectRolePermissions[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRolePermissions, {
    nullable: false
  })
  async createProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProjectRolePermissionsArgs): Promise<ProjectRolePermissions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProjectRolePermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRolePermissions, {
    nullable: true
  })
  async deleteProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProjectRolePermissionsArgs): Promise<ProjectRolePermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRolePermissions, {
    nullable: true
  })
  async updateProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProjectRolePermissionsArgs): Promise<ProjectRolePermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProjectRolePermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProjectRolePermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRolePermissions, {
    nullable: false
  })
  async upsertProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProjectRolePermissionsArgs): Promise<ProjectRolePermissions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProjectRolePermissions, {
    nullable: false
  })
  async aggregateProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectRolePermissionsArgs): Promise<AggregateProjectRolePermissions> {
    return getPrismaFromContext(ctx).projectRolePermissions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectRolePermissionsGroupBy], {
    nullable: false
  })
  async groupByProjectRolePermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectRolePermissionsArgs): Promise<ProjectRolePermissionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRolePermissions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
