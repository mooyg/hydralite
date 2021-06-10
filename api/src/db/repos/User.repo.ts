import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import User from "~/db/entity/User.entity";
import DiscordUser from "~/types/DiscordUser.type";
import OauthConnection from "../entity/OauthConnection.entity";
import UserProfile from "../entity/UserProfile.entity";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async createDiscordUser(discordUser: DiscordUser) {
    try {
      const connection = await OauthConnection.create({
        oauthService: "discord",
        email: discordUser.email,
        username: `${discordUser.username}#${discordUser.discriminator}`,
        isPrimary: true,
      }).save();

      const profile = await UserProfile.create({
        avatarUrl: discordUser.avatar,
        bio: "",
        connections: [connection],
      }).save();

      const user = await this.create({
        email: discordUser.email || "",
        elonicMemberId: "",
        joinDate: new Date(),
        profile,
        username: "",
        marketingCredits: 0,
        projects: [],
        likedProjects: [],
        followedProjects: [],
      }).save();

      return user;
    } catch (err) {
      console.error(err);
      throw new Error(`Error creating user: ${err.message}`);
    }
  }
}

export default getCustomRepository(UserRepository);
