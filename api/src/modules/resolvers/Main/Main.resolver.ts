import { Query } from "type-graphql";

export default class MainResolver {
  @Query(() => String)
  async main() {
    return "imagine using rest - gql 2021";
  }
}
