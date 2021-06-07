// dependencies
import { Arg, Mutation, Resolver } from "type-graphql";

// input types
import { UserSignOnInput } from "./UserSignOn.input";

// entities
import User from "../../../db/entity/User.entity";
import axios from "axios";

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
    // Fetch github record using token
    try {
      const ghResult = (
        await axios({
          url: "https://api.github.com/user",
          method: "GET",
          headers: {
            Authorization: `token ${ghAccessToken}`,
          },
        })
      ).data;

      // TODO for dudebro: replace this random user response with a call to the findOrCreateUserByGhId function in the custom repo, pass in the ghResult variable and return the result of the function call accordingly (returns User). make sure to test the code lol
      const user = await User.findOne({ where: { email: "hi" } });
      return user || null;
    } catch {
      // User passed invalid token or there was an error querying api

      throw new Error(
        "There was an internal server error. Please make sure your github access token is valid."
      );
    }
  }
}
