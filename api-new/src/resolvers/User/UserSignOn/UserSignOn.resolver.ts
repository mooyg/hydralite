// dependencies
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

// input types
import { UserSignOnInput } from "./UserSignOn.input";

// entities
import User from "../../../db/entity/User.entity";
import axios from "axios";
import UserRepository from "../../../db/repos/User.repo";
import { ContextType } from "src/types/Context.type";

@Resolver()
export default class UserSignOnResolver {
  @Mutation(() => User, {
    nullable: true,
    description:
      "Take a users github access token and either register or log them in on DevMark",
  })
  async userSignOn(
    @Arg("input") { ghAccessToken }: UserSignOnInput,
    @Ctx() { em }: ContextType
  ): Promise<User | null> {
    const userRepository = em.getRepository(UserRepository);

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

    // TODO https://github.com/project-devmark/devmark/issues/3

    return await userRepository.findOrCreateUserByGhId(ghResult);
  }
}
