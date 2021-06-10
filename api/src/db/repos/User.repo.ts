import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import User from "~/db/entity/User.entity";
import DiscordUser from "~/types/DiscordUser.type";
import executeOrFail from "~/util/executeOrFail";
import OauthConnection from "../entity/OauthConnection.entity";
import UserProfile from "../entity/UserProfile.entity";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async createDiscordUser(discordUser: DiscordUser): Promise<User> {
    return executeOrFail(async () => {
      const connection = await OauthConnection.create({
        oauthService: "discord",
        email: discordUser.email,
        username: `${discordUser.username}#${discordUser.discriminator}`,
        isPrimary: true,
      }).save();

      const profile = await UserProfile.create({
        avatarUrl: `https://cdn.discordapp.com/avatars/${process.env.DISCORD_OAUTH_CLIENT_ID}/${discordUser.avatar}.webp`,
        bio: "",
        connections: [connection],
      }).save();

      const user = await this.create({
        email: discordUser.email || "",
        elonicMemberId: "",
        joinDate: new Date(),
        profile,
        username: `${discordUser.username}#${discordUser.discriminator}`,
        marketingCredits: 0,
        projects: [],
        likedProjects: [],
        followedProjects: [],
      }).save();

      await OauthConnection.update(connection, {
        owner: user,
      });

      return user;
    }, "Error creating user");
  }
}

export default getCustomRepository(UserRepository);
