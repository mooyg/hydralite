// dependencies
import { Arg, Mutation, Resolver } from "type-graphql";

// input types
import { CreateUserInput } from "./CreateUser.input";

// entities
import User from "../../../entity/User";

@Resolver()
export default class CreateUserResolver {
  @Mutation(() => User, { nullable: true })
  async createUser(
    @Arg("input") { ghAccessToken }: CreateUserInput
  ): Promise<User | null> {
    // Fetch github record using token
    // Extract required fields and insert into db

    console.log(ghAccessToken);
    const user = await User.create({}).save();
    return user || null;
  }
}
