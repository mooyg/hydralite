// dependencies
import { Arg, Mutation, Resolver } from "type-graphql";

// input types
import { UserSignOnInput } from "../../input/User/UserSignOn.input";

// entities
import User from "../../../db/entity/User.entity";
import axios from "axios";
import { getCustomRepository } from "typeorm";
import UserRepository from "../../../db/repos/User.repo";

@Resolver()
export default class UserSignOnResolver {
  @Mutation(() => User, {
    nullable: true,
    description:
      "Take a users github access token and either register or log them in on DevMark",
  })
  async userSignOn(
    @Arg("input") { ghAccessToken }: UserSignOnInput
  ): Promise<User | null> {
    const userRepository = getCustomRepository(UserRepository);

    // Fetch github record using token
    let ghResult;
    try {
      ghResult = (
        await axios({
          url: "https://api.github.com/user",
          method: "GET",
          headers: {
            Authorization: `token ${ghAccessToken}`,
          },
        })
      ).data;
    } catch {
      // User passed invalid token or there was an error querying api
      throw new Error(
        "There was an internal server error. Please make sure your github access token is valid."
      );
    }

    // TODO: https://github.com/project-devmark/devmark/issues/3

    return await userRepository.findOrCreateUserByGhId(ghResult);
  }
}
