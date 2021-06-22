import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  PostComment: crudResolvers.PostCommentCrudResolver,
  Attachment: crudResolvers.AttachmentCrudResolver,
  Hashtag: crudResolvers.HashtagCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  PostGroup: crudResolvers.PostGroupCrudResolver,
  OauthConnection: crudResolvers.OauthConnectionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  Project: crudResolvers.ProjectCrudResolver
};
const relationResolversMap = {
  PostComment: relationResolvers.PostCommentRelationsResolver,
  Attachment: relationResolvers.AttachmentRelationsResolver,
  Hashtag: relationResolvers.HashtagRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  PostGroup: relationResolvers.PostGroupRelationsResolver,
  OauthConnection: relationResolvers.OauthConnectionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver
};
const actionResolversMap = {
  PostComment: {
    postComment: actionResolvers.FindUniquePostCommentResolver,
    findFirstPostComment: actionResolvers.FindFirstPostCommentResolver,
    postComments: actionResolvers.FindManyPostCommentResolver,
    createPostComment: actionResolvers.CreatePostCommentResolver,
    createManyPostComment: actionResolvers.CreateManyPostCommentResolver,
    deletePostComment: actionResolvers.DeletePostCommentResolver,
    updatePostComment: actionResolvers.UpdatePostCommentResolver,
    deleteManyPostComment: actionResolvers.DeleteManyPostCommentResolver,
    updateManyPostComment: actionResolvers.UpdateManyPostCommentResolver,
    upsertPostComment: actionResolvers.UpsertPostCommentResolver,
    aggregatePostComment: actionResolvers.AggregatePostCommentResolver,
    groupByPostComment: actionResolvers.GroupByPostCommentResolver
  },
  Attachment: {
    attachment: actionResolvers.FindUniqueAttachmentResolver,
    findFirstAttachment: actionResolvers.FindFirstAttachmentResolver,
    attachments: actionResolvers.FindManyAttachmentResolver,
    createAttachment: actionResolvers.CreateAttachmentResolver,
    createManyAttachment: actionResolvers.CreateManyAttachmentResolver,
    deleteAttachment: actionResolvers.DeleteAttachmentResolver,
    updateAttachment: actionResolvers.UpdateAttachmentResolver,
    deleteManyAttachment: actionResolvers.DeleteManyAttachmentResolver,
    updateManyAttachment: actionResolvers.UpdateManyAttachmentResolver,
    upsertAttachment: actionResolvers.UpsertAttachmentResolver,
    aggregateAttachment: actionResolvers.AggregateAttachmentResolver,
    groupByAttachment: actionResolvers.GroupByAttachmentResolver
  },
  Hashtag: {
    hashtag: actionResolvers.FindUniqueHashtagResolver,
    findFirstHashtag: actionResolvers.FindFirstHashtagResolver,
    hashtags: actionResolvers.FindManyHashtagResolver,
    createHashtag: actionResolvers.CreateHashtagResolver,
    createManyHashtag: actionResolvers.CreateManyHashtagResolver,
    deleteHashtag: actionResolvers.DeleteHashtagResolver,
    updateHashtag: actionResolvers.UpdateHashtagResolver,
    deleteManyHashtag: actionResolvers.DeleteManyHashtagResolver,
    updateManyHashtag: actionResolvers.UpdateManyHashtagResolver,
    upsertHashtag: actionResolvers.UpsertHashtagResolver,
    aggregateHashtag: actionResolvers.AggregateHashtagResolver,
    groupByHashtag: actionResolvers.GroupByHashtagResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  PostGroup: {
    postGroup: actionResolvers.FindUniquePostGroupResolver,
    findFirstPostGroup: actionResolvers.FindFirstPostGroupResolver,
    postGroups: actionResolvers.FindManyPostGroupResolver,
    createPostGroup: actionResolvers.CreatePostGroupResolver,
    createManyPostGroup: actionResolvers.CreateManyPostGroupResolver,
    deletePostGroup: actionResolvers.DeletePostGroupResolver,
    updatePostGroup: actionResolvers.UpdatePostGroupResolver,
    deleteManyPostGroup: actionResolvers.DeleteManyPostGroupResolver,
    updateManyPostGroup: actionResolvers.UpdateManyPostGroupResolver,
    upsertPostGroup: actionResolvers.UpsertPostGroupResolver,
    aggregatePostGroup: actionResolvers.AggregatePostGroupResolver,
    groupByPostGroup: actionResolvers.GroupByPostGroupResolver
  },
  OauthConnection: {
    oauthConnection: actionResolvers.FindUniqueOauthConnectionResolver,
    findFirstOauthConnection: actionResolvers.FindFirstOauthConnectionResolver,
    oauthConnections: actionResolvers.FindManyOauthConnectionResolver,
    createOauthConnection: actionResolvers.CreateOauthConnectionResolver,
    createManyOauthConnection: actionResolvers.CreateManyOauthConnectionResolver,
    deleteOauthConnection: actionResolvers.DeleteOauthConnectionResolver,
    updateOauthConnection: actionResolvers.UpdateOauthConnectionResolver,
    deleteManyOauthConnection: actionResolvers.DeleteManyOauthConnectionResolver,
    updateManyOauthConnection: actionResolvers.UpdateManyOauthConnectionResolver,
    upsertOauthConnection: actionResolvers.UpsertOauthConnectionResolver,
    aggregateOauthConnection: actionResolvers.AggregateOauthConnectionResolver,
    groupByOauthConnection: actionResolvers.GroupByOauthConnectionResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  UserProfile: {
    userProfile: actionResolvers.FindUniqueUserProfileResolver,
    findFirstUserProfile: actionResolvers.FindFirstUserProfileResolver,
    userProfiles: actionResolvers.FindManyUserProfileResolver,
    createUserProfile: actionResolvers.CreateUserProfileResolver,
    createManyUserProfile: actionResolvers.CreateManyUserProfileResolver,
    deleteUserProfile: actionResolvers.DeleteUserProfileResolver,
    updateUserProfile: actionResolvers.UpdateUserProfileResolver,
    deleteManyUserProfile: actionResolvers.DeleteManyUserProfileResolver,
    updateManyUserProfile: actionResolvers.UpdateManyUserProfileResolver,
    upsertUserProfile: actionResolvers.UpsertUserProfileResolver,
    aggregateUserProfile: actionResolvers.AggregateUserProfileResolver,
    groupByUserProfile: actionResolvers.GroupByUserProfileResolver
  },
  Project: {
    project: actionResolvers.FindUniqueProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    projects: actionResolvers.FindManyProjectResolver,
    createProject: actionResolvers.CreateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    deleteProject: actionResolvers.DeleteProjectResolver,
    updateProject: actionResolvers.UpdateProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    upsertProject: actionResolvers.UpsertProjectResolver,
    aggregateProject: actionResolvers.AggregateProjectResolver,
    groupByProject: actionResolvers.GroupByProjectResolver
  }
};
const resolversInfo = {
  PostComment: ["postComment", "findFirstPostComment", "postComments", "createPostComment", "createManyPostComment", "deletePostComment", "updatePostComment", "deleteManyPostComment", "updateManyPostComment", "upsertPostComment", "aggregatePostComment", "groupByPostComment"],
  Attachment: ["attachment", "findFirstAttachment", "attachments", "createAttachment", "createManyAttachment", "deleteAttachment", "updateAttachment", "deleteManyAttachment", "updateManyAttachment", "upsertAttachment", "aggregateAttachment", "groupByAttachment"],
  Hashtag: ["hashtag", "findFirstHashtag", "hashtags", "createHashtag", "createManyHashtag", "deleteHashtag", "updateHashtag", "deleteManyHashtag", "updateManyHashtag", "upsertHashtag", "aggregateHashtag", "groupByHashtag"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  PostGroup: ["postGroup", "findFirstPostGroup", "postGroups", "createPostGroup", "createManyPostGroup", "deletePostGroup", "updatePostGroup", "deleteManyPostGroup", "updateManyPostGroup", "upsertPostGroup", "aggregatePostGroup", "groupByPostGroup"],
  OauthConnection: ["oauthConnection", "findFirstOauthConnection", "oauthConnections", "createOauthConnection", "createManyOauthConnection", "deleteOauthConnection", "updateOauthConnection", "deleteManyOauthConnection", "updateManyOauthConnection", "upsertOauthConnection", "aggregateOauthConnection", "groupByOauthConnection"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"]
};
const relationResolversInfo = {
  PostComment: ["creator", "post"],
  Attachment: ["post"],
  Hashtag: ["creator", "posts"],
  Post: ["postGroups", "creator", "comments", "attachments", "hashtags"],
  PostGroup: ["creator", "members", "posts", "project"],
  OauthConnection: ["user"],
  User: ["profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserProfile: ["user"],
  Project: ["owner", "members", "likers", "followers", "postGroups"]
};
const modelsInfo = {
  PostComment: ["id", "createdAt", "body", "creatorId", "postId"],
  Attachment: ["id", "attachmentURL", "type", "postId"],
  Hashtag: ["id", "createdAt", "name", "numOfPosts", "creatorId"],
  Post: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostGroup: ["id", "title", "description", "isCommunity", "creatorId", "projectId"],
  OauthConnection: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  User: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserProfile: ["id", "avatarURL", "bio"],
  Project: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"]
};
const inputsInfo = {
  PostCommentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "body", "creator", "creatorId", "post", "postId"],
  PostCommentOrderByInput: ["id", "createdAt", "body", "creatorId", "postId"],
  PostCommentWhereUniqueInput: ["id"],
  PostCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "body", "creatorId", "postId"],
  AttachmentWhereInput: ["AND", "OR", "NOT", "id", "attachmentURL", "type", "post", "postId"],
  AttachmentOrderByInput: ["id", "attachmentURL", "type", "postId"],
  AttachmentWhereUniqueInput: ["id"],
  AttachmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "attachmentURL", "type", "postId"],
  HashtagWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "numOfPosts", "creator", "creatorId", "posts"],
  HashtagOrderByInput: ["id", "createdAt", "name", "numOfPosts", "creatorId"],
  HashtagWhereUniqueInput: ["id"],
  HashtagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "numOfPosts", "creatorId"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "creatorId", "comments", "attachments", "hashtags"],
  PostOrderByInput: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostGroupWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "isCommunity", "creator", "creatorId", "members", "posts", "project", "projectId"],
  PostGroupOrderByInput: ["id", "title", "description", "isCommunity", "creatorId", "projectId"],
  PostGroupWhereUniqueInput: ["id"],
  PostGroupScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "isCommunity", "creatorId", "projectId"],
  OauthConnectionWhereInput: ["AND", "OR", "NOT", "id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user", "userId"],
  OauthConnectionOrderByInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionWhereUniqueInput: ["id"],
  OauthConnectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "profileId", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserOrderByInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "user", "avatarURL", "bio"],
  UserProfileOrderByInput: ["id", "avatarURL", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "avatarURL", "bio"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "logoUrl", "bannerUrl", "owner", "ownerId", "members", "likers", "followers", "postGroups"],
  ProjectOrderByInput: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectWhereUniqueInput: ["id"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  PostCommentCreateInput: ["id", "createdAt", "body", "creator", "post"],
  PostCommentUpdateInput: ["id", "createdAt", "body", "creator", "post"],
  PostCommentCreateManyInput: ["id", "createdAt", "body", "creatorId", "postId"],
  PostCommentUpdateManyMutationInput: ["id", "createdAt", "body"],
  AttachmentCreateInput: ["id", "attachmentURL", "type", "post"],
  AttachmentUpdateInput: ["id", "attachmentURL", "type", "post"],
  AttachmentCreateManyInput: ["id", "attachmentURL", "type", "postId"],
  AttachmentUpdateManyMutationInput: ["id", "attachmentURL", "type"],
  HashtagCreateInput: ["id", "createdAt", "name", "numOfPosts", "creator", "posts"],
  HashtagUpdateInput: ["id", "createdAt", "name", "numOfPosts", "creator", "posts"],
  HashtagCreateManyInput: ["id", "createdAt", "name", "numOfPosts", "creatorId"],
  HashtagUpdateManyMutationInput: ["id", "createdAt", "name", "numOfPosts"],
  PostCreateInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "attachments", "hashtags"],
  PostUpdateInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "attachments", "hashtags"],
  PostCreateManyInput: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostUpdateManyMutationInput: ["id", "postedtime", "title", "description", "isAnnouncement"],
  PostGroupCreateInput: ["id", "title", "description", "isCommunity", "creator", "members", "posts", "project"],
  PostGroupUpdateInput: ["id", "title", "description", "isCommunity", "creator", "members", "posts", "project"],
  PostGroupCreateManyInput: ["id", "title", "description", "isCommunity", "creatorId", "projectId"],
  PostGroupUpdateManyMutationInput: ["id", "title", "description", "isCommunity"],
  OauthConnectionCreateInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionUpdateInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionCreateManyInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionUpdateManyMutationInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  UserCreateInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserUpdateInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateManyInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserUpdateManyMutationInput: ["id", "createdAt", "username", "email", "joinDate", "hydra"],
  UserProfileCreateInput: ["id", "avatarURL", "bio", "user"],
  UserProfileUpdateInput: ["id", "avatarURL", "bio", "user"],
  UserProfileCreateManyInput: ["id", "avatarURL", "bio"],
  UserProfileUpdateManyMutationInput: ["id", "avatarURL", "bio"],
  ProjectCreateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers", "postGroups"],
  ProjectUpdateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers", "postGroups"],
  ProjectCreateManyInput: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectUpdateManyMutationInput: ["id", "title", "description", "logoUrl", "bannerUrl"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  PostRelationFilter: ["is", "isNot"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  EnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  PostGroupListRelationFilter: ["every", "some", "none"],
  PostCommentListRelationFilter: ["every", "some", "none"],
  AttachmentListRelationFilter: ["every", "some", "none"],
  HashtagListRelationFilter: ["every", "some", "none"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  ProjectRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumOauthConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  EnumOauthConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileRelationFilter: ["is", "isNot"],
  ProjectListRelationFilter: ["every", "some", "none"],
  OauthConnectionListRelationFilter: ["every", "some", "none"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateNestedOneWithoutCreatedPostCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutCreatedPostCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedOneWithoutAttachmentsInput: ["create", "connectOrCreate", "connect"],
  EnumAttachmentTypeFieldUpdateOperationsInput: ["set"],
  PostUpdateOneRequiredWithoutAttachmentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCreatedHashtagsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutHashtagsInput: ["create", "connectOrCreate", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutCreatedHashtagsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutHashtagsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostGroupCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  PostCommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttachmentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  PostGroupUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  AttachmentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutOwnedPostGroupsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutMemberOfPostGroupsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutPostGroupsInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutPostGroupsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutOwnedPostGroupsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutMemberOfPostGroupsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutPostGroupsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateOneWithoutPostGroupsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutOauthConnectionsInput: ["create", "connectOrCreate", "connect"],
  EnumOauthConnectionServiceFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutOauthConnectionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedManyWithoutMembersInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutLikersInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  OauthConnectionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostGroupCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostGroupCreateNestedManyWithoutMembersInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserProfileUpdateOneRequiredWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutMembersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OauthConnectionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostGroupUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostGroupUpdateManyWithoutMembersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutOwnedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutAllProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "connect"],
  PostGroupCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutOwnedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutAllProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostGroupUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumAttachmentTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumAttachmentTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumOauthConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  NestedEnumOauthConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateWithoutCreatedPostCommentsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutCreatedPostCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "attachments", "hashtags"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCreatedPostCommentsInput: ["update", "create"],
  UserUpdateWithoutCreatedPostCommentsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "attachments", "hashtags"],
  PostCreateWithoutAttachmentsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "hashtags"],
  PostCreateOrConnectWithoutAttachmentsInput: ["where", "create"],
  PostUpsertWithoutAttachmentsInput: ["update", "create"],
  PostUpdateWithoutAttachmentsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "hashtags"],
  UserCreateWithoutCreatedHashtagsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutCreatedHashtagsInput: ["where", "create"],
  PostCreateWithoutHashtagsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "attachments"],
  PostCreateOrConnectWithoutHashtagsInput: ["where", "create"],
  UserUpsertWithoutCreatedHashtagsInput: ["update", "create"],
  UserUpdateWithoutCreatedHashtagsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "ownedPostGroups", "memberOfPostGroups"],
  PostUpsertWithWhereUniqueWithoutHashtagsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutHashtagsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutHashtagsInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostGroupCreateWithoutPostsInput: ["id", "title", "description", "isCommunity", "creator", "members", "project"],
  PostGroupCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserCreateWithoutPostsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostCommentCreateWithoutPostInput: ["id", "createdAt", "body", "creator"],
  PostCommentCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  AttachmentCreateWithoutPostInput: ["id", "attachmentURL", "type"],
  AttachmentCreateOrConnectWithoutPostInput: ["where", "create"],
  AttachmentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  HashtagCreateWithoutPostsInput: ["id", "createdAt", "name", "numOfPosts", "creator"],
  HashtagCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostGroupUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  PostGroupUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  PostGroupUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  PostGroupScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "isCommunity", "creatorId", "projectId"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  PostCommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  PostCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "body", "creatorId", "postId"],
  AttachmentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  AttachmentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  AttachmentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  AttachmentScalarWhereInput: ["AND", "OR", "NOT", "id", "attachmentURL", "type", "postId"],
  HashtagUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  HashtagUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  HashtagUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  HashtagScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "numOfPosts", "creatorId"],
  UserCreateWithoutOwnedPostGroupsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "memberOfPostGroups"],
  UserCreateOrConnectWithoutOwnedPostGroupsInput: ["where", "create"],
  UserCreateWithoutMemberOfPostGroupsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups"],
  UserCreateOrConnectWithoutMemberOfPostGroupsInput: ["where", "create"],
  PostCreateWithoutPostGroupsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "creator", "comments", "attachments", "hashtags"],
  PostCreateOrConnectWithoutPostGroupsInput: ["where", "create"],
  ProjectCreateWithoutPostGroupsInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers"],
  ProjectCreateOrConnectWithoutPostGroupsInput: ["where", "create"],
  UserUpsertWithoutOwnedPostGroupsInput: ["update", "create"],
  UserUpdateWithoutOwnedPostGroupsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "memberOfPostGroups"],
  UserUpsertWithWhereUniqueWithoutMemberOfPostGroupsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutMemberOfPostGroupsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutMemberOfPostGroupsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  PostUpsertWithWhereUniqueWithoutPostGroupsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutPostGroupsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutPostGroupsInput: ["where", "data"],
  ProjectUpsertWithoutPostGroupsInput: ["update", "create"],
  ProjectUpdateWithoutPostGroupsInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers"],
  UserCreateWithoutOauthConnectionsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutOauthConnectionsInput: ["where", "create"],
  UserUpsertWithoutOauthConnectionsInput: ["update", "create"],
  UserUpdateWithoutOauthConnectionsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserProfileCreateWithoutUserInput: ["id", "avatarURL", "bio"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectCreateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "members", "likers", "followers", "postGroups"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutMembersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "likers", "followers", "postGroups"],
  ProjectCreateOrConnectWithoutMembersInput: ["where", "create"],
  ProjectCreateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "followers", "postGroups"],
  ProjectCreateOrConnectWithoutLikersInput: ["where", "create"],
  ProjectCreateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "postGroups"],
  ProjectCreateOrConnectWithoutFollowersInput: ["where", "create"],
  OauthConnectionCreateWithoutUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionCreateOrConnectWithoutUserInput: ["where", "create"],
  OauthConnectionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFollowersInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  PostCreateWithoutCreatorInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "comments", "attachments", "hashtags"],
  PostCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  PostCommentCreateWithoutCreatorInput: ["id", "createdAt", "body", "post"],
  PostCommentCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostCommentCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  HashtagCreateWithoutCreatorInput: ["id", "createdAt", "name", "numOfPosts", "posts"],
  HashtagCreateOrConnectWithoutCreatorInput: ["where", "create"],
  HashtagCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  PostGroupCreateWithoutCreatorInput: ["id", "title", "description", "isCommunity", "members", "posts", "project"],
  PostGroupCreateOrConnectWithoutCreatorInput: ["where", "create"],
  PostGroupCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  PostGroupCreateWithoutMembersInput: ["id", "title", "description", "isCommunity", "creator", "posts", "project"],
  PostGroupCreateOrConnectWithoutMembersInput: ["where", "create"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["id", "avatarURL", "bio"],
  ProjectUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectUpsertWithWhereUniqueWithoutMembersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutMembersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutMembersInput: ["where", "data"],
  ProjectUpsertWithWhereUniqueWithoutLikersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutLikersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutLikersInput: ["where", "data"],
  ProjectUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  OauthConnectionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  OauthConnectionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  OauthConnectionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  OauthConnectionScalarWhereInput: ["AND", "OR", "NOT", "id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  PostUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  HashtagUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  HashtagUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  HashtagUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostGroupUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  PostGroupUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  PostGroupUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostGroupUpsertWithWhereUniqueWithoutMembersInput: ["where", "update", "create"],
  PostGroupUpdateWithWhereUniqueWithoutMembersInput: ["where", "data"],
  PostGroupUpdateManyWithWhereWithoutMembersInput: ["where", "data"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateWithoutOwnedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutOwnedProjectsInput: ["where", "create"],
  UserCreateWithoutAllProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutAllProjectsInput: ["where", "create"],
  UserCreateWithoutLikedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutLikedProjectsInput: ["where", "create"],
  UserCreateWithoutFollowedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserCreateOrConnectWithoutFollowedProjectsInput: ["where", "create"],
  PostGroupCreateWithoutProjectInput: ["id", "title", "description", "isCommunity", "creator", "members", "posts"],
  PostGroupCreateOrConnectWithoutProjectInput: ["where", "create"],
  PostGroupCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutOwnedProjectsInput: ["update", "create"],
  UserUpdateWithoutOwnedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserUpsertWithWhereUniqueWithoutAllProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutAllProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutAllProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutLikedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowedProjectsInput: ["where", "data"],
  PostGroupUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  PostGroupUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  PostGroupUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  PostUpdateWithoutHashtagsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "creator", "comments", "attachments"],
  PostCommentCreateManyPostInput: ["id", "createdAt", "body", "creatorId"],
  AttachmentCreateManyPostInput: ["id", "attachmentURL", "type"],
  PostGroupUpdateWithoutPostsInput: ["id", "title", "description", "isCommunity", "creator", "members", "project"],
  PostCommentUpdateWithoutPostInput: ["id", "createdAt", "body", "creator"],
  AttachmentUpdateWithoutPostInput: ["id", "attachmentURL", "type"],
  HashtagUpdateWithoutPostsInput: ["id", "createdAt", "name", "numOfPosts", "creator"],
  UserUpdateWithoutMemberOfPostGroupsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups"],
  PostUpdateWithoutPostGroupsInput: ["id", "postedtime", "title", "description", "isAnnouncement", "creator", "comments", "attachments", "hashtags"],
  ProjectCreateManyOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl"],
  OauthConnectionCreateManyUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  PostCreateManyCreatorInput: ["id", "postedtime", "title", "description", "isAnnouncement"],
  PostCommentCreateManyCreatorInput: ["id", "createdAt", "body", "postId"],
  HashtagCreateManyCreatorInput: ["id", "createdAt", "name", "numOfPosts"],
  PostGroupCreateManyCreatorInput: ["id", "title", "description", "isCommunity", "projectId"],
  ProjectUpdateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "members", "likers", "followers", "postGroups"],
  ProjectUpdateWithoutMembersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "likers", "followers", "postGroups"],
  ProjectUpdateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "followers", "postGroups"],
  ProjectUpdateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "postGroups"],
  OauthConnectionUpdateWithoutUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  UserUpdateWithoutFollowersInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserUpdateWithoutFollowingInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  PostUpdateWithoutCreatorInput: ["id", "postedtime", "title", "description", "isAnnouncement", "postGroups", "comments", "attachments", "hashtags"],
  PostCommentUpdateWithoutCreatorInput: ["id", "createdAt", "body", "post"],
  HashtagUpdateWithoutCreatorInput: ["id", "createdAt", "name", "numOfPosts", "posts"],
  PostGroupUpdateWithoutCreatorInput: ["id", "title", "description", "isCommunity", "members", "posts", "project"],
  PostGroupUpdateWithoutMembersInput: ["id", "title", "description", "isCommunity", "creator", "posts", "project"],
  PostGroupCreateManyProjectInput: ["id", "title", "description", "isCommunity", "creatorId"],
  UserUpdateWithoutAllProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserUpdateWithoutLikedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "followedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  UserUpdateWithoutFollowedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "oauthConnections", "following", "followers", "posts", "createdPostComments", "createdHashtags", "ownedPostGroups", "memberOfPostGroups"],
  PostGroupUpdateWithoutProjectInput: ["id", "title", "description", "isCommunity", "creator", "members", "posts"]
};
const outputsInfo = {
  AggregatePostComment: ["_count", "_min", "_max"],
  PostCommentGroupBy: ["id", "createdAt", "body", "creatorId", "postId", "_count", "_min", "_max"],
  AggregateAttachment: ["_count", "_min", "_max"],
  AttachmentGroupBy: ["id", "attachmentURL", "type", "postId", "_count", "_min", "_max"],
  AggregateHashtag: ["_count", "_avg", "_sum", "_min", "_max"],
  HashtagGroupBy: ["id", "createdAt", "name", "numOfPosts", "creatorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId", "_count", "_min", "_max"],
  AggregatePostGroup: ["_count", "_min", "_max"],
  PostGroupGroupBy: ["id", "title", "description", "isCommunity", "creatorId", "projectId", "_count", "_min", "_max"],
  AggregateOauthConnection: ["_count", "_min", "_max"],
  OauthConnectionGroupBy: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "avatarURL", "bio", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PostCommentCountAggregate: ["id", "createdAt", "body", "creatorId", "postId", "_all"],
  PostCommentMinAggregate: ["id", "createdAt", "body", "creatorId", "postId"],
  PostCommentMaxAggregate: ["id", "createdAt", "body", "creatorId", "postId"],
  AttachmentCountAggregate: ["id", "attachmentURL", "type", "postId", "_all"],
  AttachmentMinAggregate: ["id", "attachmentURL", "type", "postId"],
  AttachmentMaxAggregate: ["id", "attachmentURL", "type", "postId"],
  HashtagCountAggregate: ["id", "createdAt", "name", "numOfPosts", "creatorId", "_all"],
  HashtagAvgAggregate: ["numOfPosts"],
  HashtagSumAggregate: ["numOfPosts"],
  HashtagMinAggregate: ["id", "createdAt", "name", "numOfPosts", "creatorId"],
  HashtagMaxAggregate: ["id", "createdAt", "name", "numOfPosts", "creatorId"],
  PostCountAggregate: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId", "_all"],
  PostMinAggregate: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostMaxAggregate: ["id", "postedtime", "title", "description", "isAnnouncement", "creatorId"],
  PostGroupCountAggregate: ["id", "title", "description", "isCommunity", "creatorId", "projectId", "_all"],
  PostGroupMinAggregate: ["id", "title", "description", "isCommunity", "creatorId", "projectId"],
  PostGroupMaxAggregate: ["id", "title", "description", "isCommunity", "creatorId", "projectId"],
  OauthConnectionCountAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_all"],
  OauthConnectionMinAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionMaxAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  UserCountAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "_all"],
  UserAvgAggregate: ["hydra"],
  UserSumAggregate: ["hydra"],
  UserMinAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserMaxAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserProfileCountAggregate: ["id", "avatarURL", "bio", "_all"],
  UserProfileMinAggregate: ["id", "avatarURL", "bio"],
  UserProfileMaxAggregate: ["id", "avatarURL", "bio"],
  ProjectCountAggregate: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId", "_all"],
  ProjectMinAggregate: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectMaxAggregate: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"]
};
const argsInfo = {
  FindUniquePostCommentArgs: ["where"],
  FindFirstPostCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostCommentArgs: ["data"],
  CreateManyPostCommentArgs: ["data", "skipDuplicates"],
  DeletePostCommentArgs: ["where"],
  UpdatePostCommentArgs: ["data", "where"],
  DeleteManyPostCommentArgs: ["where"],
  UpdateManyPostCommentArgs: ["data", "where"],
  UpsertPostCommentArgs: ["where", "create", "update"],
  AggregatePostCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAttachmentArgs: ["where"],
  FindFirstAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttachmentArgs: ["data"],
  CreateManyAttachmentArgs: ["data", "skipDuplicates"],
  DeleteAttachmentArgs: ["where"],
  UpdateAttachmentArgs: ["data", "where"],
  DeleteManyAttachmentArgs: ["where"],
  UpdateManyAttachmentArgs: ["data", "where"],
  UpsertAttachmentArgs: ["where", "create", "update"],
  AggregateAttachmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttachmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueHashtagArgs: ["where"],
  FindFirstHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHashtagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateHashtagArgs: ["data"],
  CreateManyHashtagArgs: ["data", "skipDuplicates"],
  DeleteHashtagArgs: ["where"],
  UpdateHashtagArgs: ["data", "where"],
  DeleteManyHashtagArgs: ["where"],
  UpdateManyHashtagArgs: ["data", "where"],
  UpsertHashtagArgs: ["where", "create", "update"],
  AggregateHashtagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByHashtagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostGroupArgs: ["where"],
  FindFirstPostGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostGroupArgs: ["data"],
  CreateManyPostGroupArgs: ["data", "skipDuplicates"],
  DeletePostGroupArgs: ["where"],
  UpdatePostGroupArgs: ["data", "where"],
  DeleteManyPostGroupArgs: ["where"],
  UpdateManyPostGroupArgs: ["data", "where"],
  UpsertPostGroupArgs: ["where", "create", "update"],
  AggregatePostGroupArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostGroupArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOauthConnectionArgs: ["where"],
  FindFirstOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOauthConnectionArgs: ["data"],
  CreateManyOauthConnectionArgs: ["data", "skipDuplicates"],
  DeleteOauthConnectionArgs: ["where"],
  UpdateOauthConnectionArgs: ["data", "where"],
  DeleteManyOauthConnectionArgs: ["where"],
  UpdateManyOauthConnectionArgs: ["data", "where"],
  UpsertOauthConnectionArgs: ["where", "create", "update"],
  AggregateOauthConnectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOauthConnectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserProfileArgs: ["where"],
  FindFirstUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserProfileArgs: ["data"],
  CreateManyUserProfileArgs: ["data", "skipDuplicates"],
  DeleteUserProfileArgs: ["where"],
  UpdateUserProfileArgs: ["data", "where"],
  DeleteManyUserProfileArgs: ["where"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpsertUserProfileArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProjectArgs: ["data"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  DeleteProjectArgs: ["where"],
  UpdateProjectArgs: ["data", "where"],
  DeleteManyProjectArgs: ["where"],
  UpdateManyProjectArgs: ["data", "where"],
  UpsertProjectArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







