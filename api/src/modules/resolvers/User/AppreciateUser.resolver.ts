import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import User from "~/db/entity/User.entity";
import UserProfile from "~/db/entity/UserProfile.entity";
import { FollowUserInput } from "~/modules/input/User/AppreciateUser.input";
import ContextType from "~/types/Context.type";

@Resolver()
export default class AppreciateUserResolver {
  @Mutation(() => String)
  async followUser(
    @Arg("input") input: FollowUserInput,
    @Ctx() { req }: ContextType
  ): Promise<string> {
    const user: User = (req as any).user;

    const userToFollowProfile = await UserProfile.findOneOrFail(input.userId, {
      relations: ["owner"],
    });

    if (userToFollowProfile.owner.id === user.id)
      throw new Error("You cant follow yourself.");

    // add user a to user b's followers
    await getConnection()
      .createQueryBuilder()
      .relation(UserProfile, "followers")
      .of(userToFollowProfile)
      .add(user);

    return "Followed user.";
  }
}
