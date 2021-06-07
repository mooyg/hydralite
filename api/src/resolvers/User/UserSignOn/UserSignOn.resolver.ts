// dependencies
import { Arg, Mutation, Resolver } from "type-graphql";

// input types
import { UserSignOnInput } from "./UserSignOn.input";

// entities
import User from "../../../entity/User.entity";

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
    // Extract required fields and insert into db

    console.log(ghAccessToken);
    const user = await User.create({}).save();
    return user || null;
  }
}
