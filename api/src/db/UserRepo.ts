import { PrismaClient } from "@prisma/client";
import { PassportGenericUser } from "~/auth/types/PassportGenericUser.type";
import { User } from "~/typegql-types/User";
import DiscordUser from "~/types/DiscordUser.type";
import { OauthConnectionService } from "~/types/OauthServiceName.enum";
import executeOrFail from "~/util/executeOrFail";

export default class UserRepo extends PrismaClient {
    // createDiscordUser = async (oauthUser: DiscordUser): Promise<User> => {
    //     return executeOrFail(async () => {
    //         const user = this.user.create({
    //             data: {
    //                 email: oauthUser.email || "",
    //                 joinDate: new Date(),
    //                 profile: {
    //                     create: {
    //                         avatarURL: `https://cdn.discordapp.com/avatars/${process.env.DISCORD_OAUTH_CLIENT_ID}/${oauthUser.avatar}.webp`,
    //                         bio: "gg",
    //                     },
    //                 },
    //                 username: `${oauthUser.username}#${oauthUser.discriminator}`,
    //                 hydra: 0,
    //                 oauthConnections: {
    //                     create: [
    //                         {
    //                             oauthService: "discord",
    //                             email: oauthUser.email || "",
    //                             username: `${oauthUser.username}#${oauthUser.discriminator}`,
    //                             oauthServiceUserId: String(oauthUser.id),
    //                             isPrimary: true,
    //                         },
    //                     ],
    //                 },
    //             },
    //             include: {
    //                 oauthConnections: true,
    //                 profile: true,
    //             },
    //         });
    //         return user;
    //     }, "Error creating user");
    // };

    // createGithubUser = async (oauthUser: any): Promise<User> => {
    //     return executeOrFail(async () => {
    //         const user = this.user.create({
    //             data: {
    //                 email: oauthUser.email || "",
    //                 profile: {
    //                     create: {
    //                         avatarURL: `https://avatars.githubusercontent.com/u/${oauthUser.id}`,
    //                         bio: oauthUser.bio,
    //                     },
    //                 },
    //                 username: oauthUser.login,
    //                 hydra: 0,
    //                 oauthConnections: {
    //                     create: [
    //                         {
    //                             oauthService: "github",
    //                             email: oauthUser.email || "",
    //                             username: oauthUser.login,
    //                             oauthServiceUserId: String(oauthUser.id),
    //                             isPrimary: true,
    //                         },
    //                     ],
    //                 },
    //             },
    //             include: {
    //                 oauthConnections: true,
    //                 profile: true,
    //             },
    //         });
    //         return user;
    //     }, "Error creating user");
    // };

    findOrCreateUser = async (
        oauthProvider: "discord" | "github" | "twitter" | "google",
        genericUserData: PassportGenericUser
    ): Promise<User> => {
        return executeOrFail(async () => {
            // find a user using the id they have on the oauth service
            const existingUser = (
                await this.oauthConnection.findFirst({
                    where: {
                        oauthServiceUserId:
                            genericUserData.primaryOauthConnection
                                .oauthServiceUserId,
                        oauthService: oauthProvider,
                    },
                    include: {
                        user: true,
                    },
                })
            )?.user;

            if (existingUser) return existingUser;

            // create the user if they dont exist
            const user = this.user.create({
                data: {
                    email: genericUserData.email || "",
                    joinDate: new Date(),
                    profile: {
                        create: {
                            avatarURL: genericUserData.profile.avatarUrl,
                            bio: genericUserData.profile.bio || "",
                        },
                    },
                    username: genericUserData.username,
                    hydra: 0,
                    oauthConnections: {
                        create: [
                            {
                                oauthService:
                                    genericUserData.primaryOauthConnection
                                        .oauthService,
                                email:
                                    genericUserData.primaryOauthConnection
                                        .email || "",
                                username:
                                    genericUserData.primaryOauthConnection
                                        .username,
                                oauthServiceUserId: String(
                                    genericUserData.primaryOauthConnection
                                        .oauthServiceUserId
                                ),
                                isPrimary: true,
                            },
                        ],
                    },
                },
                include: {
                    oauthConnections: true,
                    profile: true,
                },
            });
            return user;
        }, "Error creating user");
    };
}
