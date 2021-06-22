import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAttachmentsArgs } from "./args/GroupByAttachmentsArgs";
import { Attachments } from "../../../models/Attachments";
import { AttachmentsGroupBy } from "../../outputs/AttachmentsGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachments)
export class GroupByAttachmentsResolver {
  @TypeGraphQL.Query(_returns => [AttachmentsGroupBy], {
    nullable: false
  })
  async groupByAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttachmentsArgs): Promise<AttachmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attachments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
