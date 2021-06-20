import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileFollowersArgs } from "./args/UserProfileFollowersArgs";
import { UserProfileFollowingArgs } from "./args/UserProfileFollowingArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UserProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserProfile], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfileFollowingArgs): Promise<UserProfile[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UserProfile], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfileFollowersArgs): Promise<UserProfile[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).followers(args);
  }
}
