import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttachmentsArgs } from "./args/AggregateAttachmentsArgs";
import { Attachments } from "../../../models/Attachments";
import { AggregateAttachments } from "../../outputs/AggregateAttachments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachments)
export class AggregateAttachmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateAttachments, {
    nullable: false
  })
  async aggregateAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttachmentsArgs): Promise<AggregateAttachments> {
    return getPrismaFromContext(ctx).attachments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
