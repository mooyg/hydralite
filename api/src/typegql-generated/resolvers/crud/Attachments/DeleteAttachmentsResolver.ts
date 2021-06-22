import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteAttachmentsArgs } from "./args/DeleteAttachmentsArgs";
import { Attachments } from "../../../models/Attachments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachments)
export class DeleteAttachmentsResolver {
  @TypeGraphQL.Mutation(_returns => Attachments, {
    nullable: true
  })
  async deleteAttachments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteAttachmentsArgs): Promise<Attachments | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attachments.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
