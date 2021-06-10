// dependencies
import { Mutation, Resolver } from "type-graphql";
import User from "~/db/entity/User.entity";

@Resolver()
export default class UserSignOnResolver {
  @Mutation(() => User, {
    nullable: true,
  })
  async userSignOn(): Promise<User | null> {
    // TODO: https://github.com/project-devmark/devmark/issues/3

    return null;
  }
}
