import { User } from "@prisma/client";
import { isAuthenticated } from "src/middleware/IsAuthenticated.middleware";
import {
    Arg,
    Ctx,
    Field,
    InputType,
    Mutation,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";

@InputType()
export class FollowUnfollowUserInput {
    @Field()
    userId: string;
}

@Resolver()
export default class FollowUnfollowUserResolver {
    @Mutation(() => String)
    @UseMiddleware(isAuthenticated)
    async followUser(
        @Arg("input") input: FollowUnfollowUserInput,
        @Ctx() { req, prisma }: ContextType
    ): Promise<User> {
        return executeOrFail(async () => {
            const user: User = (req as any).user;

            const userToFollow = await prisma.user.findUnique({
                where: {
                    id: String(input.userId),
                },
            });

            if (!userToFollow) {
                throw new Error("Invalid User");
            }

            if (userToFollow.id === user.id)
                throw new Error("You cant follow yourself.");

            // add user a to user b's followers
            await prisma.user.update({
                where: {
                    id: String(userToFollow.id),
                },
                data: {
                    followers: {
                        connect: {
                            id: user.id,
                        },
                    },
                },
            });

            return "Followed user";
        });
    }

    @Mutation(() => String)
    @UseMiddleware(isAuthenticated)
    async unfollowUser(
        @Arg("input") input: FollowUnfollowUserInput,
        @Ctx() { req, prisma }: ContextType
    ): Promise<User> {
        return executeOrFail(async () => {
            const user: User = (req as any).user;

            const userToUnfollow = await prisma.user.findUnique({
                where: {
                    id: String(input.userId),
                },
            });

            if (!userToUnfollow) {
                throw new Error("Invalid User");
            }

            // remove user a from user b's followers
            await prisma.user.update({
                where: {
                    id: String(userToUnfollow.id),
                },
                data: {
                    followers: {
                        disconnect: {
                            id: user.id,
                        },
                    },
                },
            });

            return "Unfollowed user";
        });
    }
}
