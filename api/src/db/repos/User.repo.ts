import GithubUser from "../../types/GithubUser.type";
import { EntityRepository, Repository } from "typeorm";
import User from "../entity/User.entity";
import UserProfile from "../entity/UserProfile.entity";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async findOrCreateUserByGhId(ghUser: GithubUser): Promise<User | null> {
    const dbUser = await this.findOne(
      { githubId: ghUser.id },
      { relations: ["profile"] }
    );
    if (dbUser) return dbUser;

    // User does not exist, create it
    try {
      const profile = await UserProfile.create({
        avatarUrl: ghUser.avatar_url,
        bio: ghUser.bio,
      }).save();

      const user = await this.create({
        githubId: ghUser.id,
        username: ghUser.login,
        profile,
        joinDate: new Date(),
        marketingCredits: 0,
        email: ghUser.email || "",
        projects: [],
      }).save();

      return user;
    } catch (e) {
      console.error(e);
      throw new Error("Internal server error - failed to create resource");
    }
  }
}
