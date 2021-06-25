import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectRoleArgs } from "./args/AggregateProjectRoleArgs";
import { CreateManyProjectRoleArgs } from "./args/CreateManyProjectRoleArgs";
import { CreateProjectRoleArgs } from "./args/CreateProjectRoleArgs";
import { DeleteManyProjectRoleArgs } from "./args/DeleteManyProjectRoleArgs";
import { DeleteProjectRoleArgs } from "./args/DeleteProjectRoleArgs";
import { FindFirstProjectRoleArgs } from "./args/FindFirstProjectRoleArgs";
import { FindManyProjectRoleArgs } from "./args/FindManyProjectRoleArgs";
import { FindUniqueProjectRoleArgs } from "./args/FindUniqueProjectRoleArgs";
import { GroupByProjectRoleArgs } from "./args/GroupByProjectRoleArgs";
import { UpdateManyProjectRoleArgs } from "./args/UpdateManyProjectRoleArgs";
import { UpdateProjectRoleArgs } from "./args/UpdateProjectRoleArgs";
import { UpsertProjectRoleArgs } from "./args/UpsertProjectRoleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProjectRole } from "../../../models/ProjectRole";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProjectRole } from "../../outputs/AggregateProjectRole";
import { ProjectRoleGroupBy } from "../../outputs/ProjectRoleGroupBy";

@TypeGraphQL.Resolver(_of => ProjectRole)
export class ProjectRoleCrudResolver {
  @TypeGraphQL.Query(_returns => ProjectRole, {
    nullable: true
  })
  async projectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectRoleArgs): Promise<ProjectRole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectRole, {
    nullable: true
  })
  async findFirstProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectRoleArgs): Promise<ProjectRole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectRole], {
    nullable: false
  })
  async projectRoles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectRoleArgs): Promise<ProjectRole[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProjectRoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRole, {
    nullable: true
  })
  async deleteProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProjectRoleArgs): Promise<ProjectRole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRole, {
    nullable: true
  })
  async updateProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProjectRoleArgs): Promise<ProjectRole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProjectRoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProjectRoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectRole, {
    nullable: false
  })
  async upsertProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProjectRoleArgs): Promise<ProjectRole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProjectRole, {
    nullable: false
  })
  async aggregateProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectRoleArgs): Promise<AggregateProjectRole> {
    return getPrismaFromContext(ctx).projectRole.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectRoleGroupBy], {
    nullable: false
  })
  async groupByProjectRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectRoleArgs): Promise<ProjectRoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).projectRole.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
