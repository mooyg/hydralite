import { MiddlewareFn } from "type-graphql";
import ContextType from "~/types/Context.type";

export const isAuthenticated: MiddlewareFn<ContextType> = async (
    { context: { req, prisma } },
    next
) => {
    if (!req.isAuthenticated()) throw new Error("Not Authenticated.");

    const user = await prisma.user.findUnique({
        where: {
            id: (req.session as any).passport.user.id,
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
