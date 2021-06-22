import { MiddlewareFn } from "type-graphql";
import ContextType from "~/types/Context.type";

export const isAuthenticated: MiddlewareFn<ContextType> = async (
    { context: { req, prisma } },
    next
) => {
    // req.user will now store the user id instead of an actual user

    if (!req.user) throw new Error("Not Authenticated.");

    const user = await prisma.user.findUnique({
        where: {
            id: req.user as string,
        },
        include: {
            ownedProjects: true,
            allProjects: true,
            likedProjects: true,
            followedProjects: true,
            followers: true,
            following: true,
            oauthConnections: true,
            profile: true,
        },
    });
    if (!user) throw new Error("Invalid User");

    req.user = user;

    return next();
};
