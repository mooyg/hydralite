import GithubUser from "src/types/GithubUser.type";
import { EntityRepository, Repository } from "@mikro-orm/core";
import User from "../entity/User.entity";
import UserProfile from "../entity/UserProfile.entity";
import fetchOrm from "src/util/fetchOrm";

@Repository(User)
export default class UserRepository extends EntityRepository<User> {
  async findOrCreateUserByGhId(ghUser: GithubUser): Promise<User | null> {
    const dbUser = await this.findOne({ githubId: ghUser.id });
    if (dbUser) return dbUser;

    const { em } = await fetchOrm();

    // User does not exist, create it
    try {
      const profile = await em.create(UserProfile, {
        avatarUrl: ghUser.avatar_url,
        bio: ghUser.bio,
      });

      const user = await this.create({
        githubId: ghUser.id,
        username: ghUser.login,
        profile,
        joinDate: new Date(),
        marketingCredits: 0,
        email: ghUser.email || "",
        projects: [],
        likedProjects: [],
        elonicMemberId: "",
      });

      await em.flush();

      return user;
    } catch (e) {
      console.error(e);
      throw new Error("Internal server error - failed to create resource");
    }
  }
}
