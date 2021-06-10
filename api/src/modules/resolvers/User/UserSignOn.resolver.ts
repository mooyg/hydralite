// dependencies
import { Arg, Mutation, Resolver } from "type-graphql";
import OauthConnection from "~/db/entity/OauthConnection.entity";
import User from "~/db/entity/User.entity";
import UserRepo from "~/db/repos/User.repo";
import { UserSignOnInput } from "~/modules/input/User/UserSignOn.input";
import executeOrFail from "~/util/executeOrFail";
import { fetchDiscordUser } from "~/util/fetchOauthUser";

@Resolver()
export default class UserSignOnResolver {
  @Mutation(() => User)
  async userSignOn(@Arg("input") input: UserSignOnInput): Promise<User | null> {
    switch (input.provider) {
      case "discord":
        // fetch discord user by id
        return executeOrFail(async () => {
          const discordUser = await fetchDiscordUser(input.accessToken);

          // try to query oauth connections to see if a user exists
          const existingUser = await OauthConnection.findOne(
            {
              oauthService: "discord",
              username: `${discordUser.username}#${discordUser.discriminator}`,
            },
            {
              relations: [
                "owner",
                "owner.profile",
                "owner.profile.connections",
              ],
            }
          );

          // user does not exist
          return !existingUser
            ? await UserRepo.createDiscordUser(discordUser)
            : existingUser.owner;
        }, "Error creating user.");
      default:
        throw new Error("Invalid Oauth Provider.");
    }

    // TODO: https://github.com/project-devmark/devmark/issues/3

    return null;
  }
}
