import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectMemberArgs } from "./args/AggregateProjectMemberArgs";
import { ProjectMember } from "../../../models/ProjectMember";
import { AggregateProjectMember } from "../../outputs/AggregateProjectMember";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProjectMember)
export class AggregateProjectMemberResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectMember, {
    nullable: false
  })
  async aggregateProjectMember(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectMemberArgs): Promise<AggregateProjectMember> {
    return getPrismaFromContext(ctx).projectMember.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
