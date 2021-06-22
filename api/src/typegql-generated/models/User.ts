import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Hashtag } from "../models/Hashtag";
import { OauthConnection } from "../models/OauthConnection";
import { Post } from "../models/Post";
import { PostComment } from "../models/PostComment";
import { PostGroup } from "../models/PostGroup";
import { Project } from "../models/Project";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  joinDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hydra!: number;

  profile?: UserProfile;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profileId!: string;

  ownedProjects?: Project[];

  allProjects?: Project[];

  likedProjects?: Project[];

  followedProjects?: Project[];

  oauthConnections?: OauthConnection[];

  following?: User[];

  followers?: User[];

  posts?: Post[];

  createdPostComments?: PostComment[];

  createdHashtags?: Hashtag[];

  ownedPostGroups?: PostGroup[];

  memberOfPostGroups?: PostGroup[];
}
