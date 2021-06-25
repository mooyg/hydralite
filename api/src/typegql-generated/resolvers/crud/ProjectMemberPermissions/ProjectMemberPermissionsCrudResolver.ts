import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectMemberPermissionsArgs } from "./args/AggregateProjectMemberPermissionsArgs";
import { CreateManyProjectMemberPermissionsArgs } from "./args/CreateManyProjectMemberPermissionsArgs";
import { CreateProjectMemberPermissionsArgs } from "./args/CreateProjectMemberPermissionsArgs";
import { DeleteManyProjectMemberPermissionsArgs } from "./args/DeleteManyProjectMemberPermissionsArgs";
import { DeleteProjectMemberPermissionsArgs } from "./args/DeleteProjectMemberPermissionsArgs";
import { FindFirstProjectMemberPermissionsArgs } from "./args/FindFirstProjectMemberPermissionsArgs";
import { FindManyProjectMemberPermissionsArgs } from "./args/FindManyProjectMemberPermissionsArgs";
import { FindUniqueProjectMemberPermissionsArgs } from "./args/FindUniqueProjectMemberPermissionsArgs";
import { GroupByProjectMemberPermissionsArgs } from "./args/GroupByProjectMemberPermissionsArgs";
import { UpdateManyProjectMemberPermissionsArgs } from "./args/UpdateManyProjectMemberPermissionsArgs";
import { UpdateProjectMemberPermissionsArgs } from "./args/UpdateProjectMemberPermissionsArgs";
import { UpsertProjectMemberPermissionsArgs } from "./args/UpsertProjectMemberPermissionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProjectMemberPermissions } from "../../../models/ProjectMemberPermissions";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProjectMemberPermissions } from "../../outputs/AggregateProjectMemberPermissions";
import { ProjectMemberPermissionsGroupBy } from "../../outputs/ProjectMemberPermissionsGroupBy";

@TypeGraphQL.Resolver(_of => ProjectMemberPermissions)
export class ProjectMemberPermissionsCrudResolver {
  @TypeGraphQL.Query(_returns => ProjectMemberPermissions, {
    nullable: true
  })
  async findUniqueProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectMemberPermissions, {
    nullable: true
  })
  async findFirstProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectMemberPermissions], {
    nullable: false
  })
  async findManyProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectMemberPermissions, {
    nullable: false
  })
  async createProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProjectMemberPermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectMemberPermissions, {
    nullable: true
  })
  async deleteProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectMemberPermissions, {
    nullable: true
  })
  async updateProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProjectMemberPermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProjectMemberPermissionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectMemberPermissions, {
    nullable: false
  })
  async upsertProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProjectMemberPermissionsArgs): Promise<ProjectMemberPermissions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProjectMemberPermissions, {
    nullable: false
  })
  async aggregateProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectMemberPermissionsArgs): Promise<AggregateProjectMemberPermissions> {
    return getPrismaFromContext(ctx).projectMemberPermissions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectMemberPermissionsGroupBy], {
    nullable: false
  })
  async groupByProjectMemberPermissions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectMemberPermissionsArgs): Promise<ProjectMemberPermissionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectMemberPermissions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
