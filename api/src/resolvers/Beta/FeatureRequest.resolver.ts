import { FeatureRequest } from "~/typegql-types/FeatureRequest";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import ContextType from "~/types/Context.type";
import { createFeatureRequestArgs } from "./args/createFeatureRequestArgs";
import executeOrFail from "~/util/executeOrFail";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { User } from "src/typegql-generated";

@Resolver()
export class FeatureRequests {
  @Query(() => FeatureRequest, { nullable: true })
  async getFeatureRequests(
    @Ctx() { prisma }: ContextType
  ): Promise<FeatureRequest[] | null> {
    const result = await prisma.featureRequest.findMany();
    return result;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => FeatureRequest)
  async createFeatureRequest(
    @Arg("args")
    { description, name, projectId }: createFeatureRequestArgs,
    @Ctx() { prisma, req }: ContextType
  ): Promise<FeatureRequest | null> {
    // extract the logged in user
    const user: User = (req as any).user;

    return await executeOrFail(async () => {
      const isCreatedByProjectMember = !!prisma.projectMember.findFirst({
        where: { userId: user.id, projectId },
      });

      const result = await prisma.featureRequest.create({
        data: {
          description,
          name,
          isCreatedByProjectMember,
          creator: { connect: { id: user.id } },
        },
      });
      console.log(result);
      return result;
    });
  }
}
