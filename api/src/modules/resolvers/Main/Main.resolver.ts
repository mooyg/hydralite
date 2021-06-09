import { Query } from "type-graphql";

export default class MainResolver {
  @Query(() => String)
  async main() {
    return "Welcome to project devmark.";
  }
}
