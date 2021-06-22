import * as TypeGraphQL from "type-graphql";
import { Attachments } from "../../../models/Attachments";
import { Post } from "../../../models/Post";
import { AttachmentsPostArgs } from "./args/AttachmentsPostArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Attachments)
export class AttachmentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async Post(@TypeGraphQL.Root() attachments: Attachments, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AttachmentsPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).attachments.findUnique({
      where: {
        id: attachments.id,
      },
    }).Post(args);
  }
}
