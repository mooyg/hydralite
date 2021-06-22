import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyAttachmentsArgs } from "./args/FindManyAttachmentsArgs";
import { Attachments } from "../../../models/Attachments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachments)
export class FindManyAttachmentsResolver {
  @TypeGraphQL.Query(_returns => [Attachments], {
    nullable: false
  })
  async findManyAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAttachmentsArgs): Promise<Attachments[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attachments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
