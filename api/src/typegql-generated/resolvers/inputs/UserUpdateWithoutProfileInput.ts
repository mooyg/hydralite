import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { HashtagUpdateManyWithoutCreatorInput } from "../inputs/HashtagUpdateManyWithoutCreatorInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OauthConnectionUpdateManyWithoutUserInput } from "../inputs/OauthConnectionUpdateManyWithoutUserInput";
import { PostCommentUpdateManyWithoutCreatorInput } from "../inputs/PostCommentUpdateManyWithoutCreatorInput";
import { PostGroupUpdateManyWithoutCreatorInput } from "../inputs/PostGroupUpdateManyWithoutCreatorInput";
import { PostGroupUpdateManyWithoutMembersInput } from "../inputs/PostGroupUpdateManyWithoutMembersInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { ProjectMemberUpdateManyWithoutUserInput } from "../inputs/ProjectMemberUpdateManyWithoutUserInput";
import { ProjectUpdateManyWithoutFollowersInput } from "../inputs/ProjectUpdateManyWithoutFollowersInput";
import { ProjectUpdateManyWithoutLikersInput } from "../inputs/ProjectUpdateManyWithoutLikersInput";
import { ProjectUpdateManyWithoutOwnerInput } from "../inputs/ProjectUpdateManyWithoutOwnerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutFollowersInput } from "../inputs/UserUpdateManyWithoutFollowersInput";
import { UserUpdateManyWithoutFollowingInput } from "../inputs/UserUpdateManyWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutProfileInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  joinDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  hydra?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  ownedProjects?: ProjectUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateManyWithoutUserInput, {
    nullable: true
  })
  allProjects?: ProjectMemberUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutLikersInput, {
    nullable: true
  })
  likedProjects?: ProjectUpdateManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  followedProjects?: ProjectUpdateManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionUpdateManyWithoutUserInput, {
    nullable: true
  })
  oauthConnections?: OauthConnectionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserUpdateManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserUpdateManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdPostComments?: PostCommentUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => HashtagUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  createdHashtags?: HashtagUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  ownedPostGroups?: PostGroupUpdateManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => PostGroupUpdateManyWithoutMembersInput, {
    nullable: true
  })
  memberOfPostGroups?: PostGroupUpdateManyWithoutMembersInput | undefined;
}
