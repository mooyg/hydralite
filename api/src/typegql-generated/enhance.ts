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
  Attachments: crudResolvers.AttachmentsCrudResolver,
  Hashtags: crudResolvers.HashtagsCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  ProjectGroup: crudResolvers.ProjectGroupCrudResolver,
  OauthConnection: crudResolvers.OauthConnectionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  Project: crudResolvers.ProjectCrudResolver
};
const relationResolversMap = {
  PostComment: relationResolvers.PostCommentRelationsResolver,
  Attachments: relationResolvers.AttachmentsRelationsResolver,
  Hashtags: relationResolvers.HashtagsRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  ProjectGroup: relationResolvers.ProjectGroupRelationsResolver,
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
  Attachments: {
    findUniqueAttachments: actionResolvers.FindUniqueAttachmentsResolver,
    findFirstAttachments: actionResolvers.FindFirstAttachmentsResolver,
    findManyAttachments: actionResolvers.FindManyAttachmentsResolver,
    createAttachments: actionResolvers.CreateAttachmentsResolver,
    createManyAttachments: actionResolvers.CreateManyAttachmentsResolver,
    deleteAttachments: actionResolvers.DeleteAttachmentsResolver,
    updateAttachments: actionResolvers.UpdateAttachmentsResolver,
    deleteManyAttachments: actionResolvers.DeleteManyAttachmentsResolver,
    updateManyAttachments: actionResolvers.UpdateManyAttachmentsResolver,
    upsertAttachments: actionResolvers.UpsertAttachmentsResolver,
    aggregateAttachments: actionResolvers.AggregateAttachmentsResolver,
    groupByAttachments: actionResolvers.GroupByAttachmentsResolver
  },
  Hashtags: {
    findUniqueHashtags: actionResolvers.FindUniqueHashtagsResolver,
    findFirstHashtags: actionResolvers.FindFirstHashtagsResolver,
    findManyHashtags: actionResolvers.FindManyHashtagsResolver,
    createHashtags: actionResolvers.CreateHashtagsResolver,
    createManyHashtags: actionResolvers.CreateManyHashtagsResolver,
    deleteHashtags: actionResolvers.DeleteHashtagsResolver,
    updateHashtags: actionResolvers.UpdateHashtagsResolver,
    deleteManyHashtags: actionResolvers.DeleteManyHashtagsResolver,
    updateManyHashtags: actionResolvers.UpdateManyHashtagsResolver,
    upsertHashtags: actionResolvers.UpsertHashtagsResolver,
    aggregateHashtags: actionResolvers.AggregateHashtagsResolver,
    groupByHashtags: actionResolvers.GroupByHashtagsResolver
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
  ProjectGroup: {
    projectGroup: actionResolvers.FindUniqueProjectGroupResolver,
    findFirstProjectGroup: actionResolvers.FindFirstProjectGroupResolver,
    projectGroups: actionResolvers.FindManyProjectGroupResolver,
    createProjectGroup: actionResolvers.CreateProjectGroupResolver,
    createManyProjectGroup: actionResolvers.CreateManyProjectGroupResolver,
    deleteProjectGroup: actionResolvers.DeleteProjectGroupResolver,
    updateProjectGroup: actionResolvers.UpdateProjectGroupResolver,
    deleteManyProjectGroup: actionResolvers.DeleteManyProjectGroupResolver,
    updateManyProjectGroup: actionResolvers.UpdateManyProjectGroupResolver,
    upsertProjectGroup: actionResolvers.UpsertProjectGroupResolver,
    aggregateProjectGroup: actionResolvers.AggregateProjectGroupResolver,
    groupByProjectGroup: actionResolvers.GroupByProjectGroupResolver
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
  Attachments: ["findUniqueAttachments", "findFirstAttachments", "findManyAttachments", "createAttachments", "createManyAttachments", "deleteAttachments", "updateAttachments", "deleteManyAttachments", "updateManyAttachments", "upsertAttachments", "aggregateAttachments", "groupByAttachments"],
  Hashtags: ["findUniqueHashtags", "findFirstHashtags", "findManyHashtags", "createHashtags", "createManyHashtags", "deleteHashtags", "updateHashtags", "deleteManyHashtags", "updateManyHashtags", "upsertHashtags", "aggregateHashtags", "groupByHashtags"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  ProjectGroup: ["projectGroup", "findFirstProjectGroup", "projectGroups", "createProjectGroup", "createManyProjectGroup", "deleteProjectGroup", "updateProjectGroup", "deleteManyProjectGroup", "updateManyProjectGroup", "upsertProjectGroup", "aggregateProjectGroup", "groupByProjectGroup"],
  OauthConnection: ["oauthConnection", "findFirstOauthConnection", "oauthConnections", "createOauthConnection", "createManyOauthConnection", "deleteOauthConnection", "updateOauthConnection", "deleteManyOauthConnection", "updateManyOauthConnection", "upsertOauthConnection", "aggregateOauthConnection", "groupByOauthConnection"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  UserProfile: ["userProfile", "findFirstUserProfile", "userProfiles", "createUserProfile", "createManyUserProfile", "deleteUserProfile", "updateUserProfile", "deleteManyUserProfile", "updateManyUserProfile", "upsertUserProfile", "aggregateUserProfile", "groupByUserProfile"],
  Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"]
};
const relationResolversInfo = {
  PostComment: ["postedby", "post"],
  Attachments: ["Post"],
  Hashtags: ["createdBy", "Post"],
  Post: ["postedby", "ProjectGroup", "files", "comments", "Post", "PostComment", "Topics"],
  ProjectGroup: ["members", "posts"],
  OauthConnection: ["user"],
  User: ["profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserProfile: ["user"],
  Project: ["owner", "members", "likers", "followers"]
};
const modelsInfo = {
  PostComment: ["id", "body", "postedtime", "userId", "postId", "attachments"],
  Attachments: ["id", "attachmentURL", "type"],
  Hashtags: ["id", "name", "numofPosts", "postId", "userId"],
  Post: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  ProjectGroup: ["id", "title", "description", "isCommunity", "postId"],
  OauthConnection: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  User: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  UserProfile: ["id", "avatarURL", "bio"],
  Project: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"]
};
const inputsInfo = {
  PostCommentWhereInput: ["AND", "OR", "NOT", "id", "body", "postedby", "postedtime", "userId", "post", "postId", "attachments"],
  PostCommentOrderByInput: ["id", "body", "postedtime", "userId", "postId", "attachments"],
  PostCommentWhereUniqueInput: ["id"],
  PostCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "body", "postedtime", "userId", "postId", "attachments"],
  AttachmentsWhereInput: ["AND", "OR", "NOT", "id", "attachmentURL", "type", "Post"],
  AttachmentsOrderByInput: ["id", "attachmentURL", "type"],
  AttachmentsWhereUniqueInput: ["id"],
  AttachmentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "attachmentURL", "type"],
  HashtagsWhereInput: ["AND", "OR", "NOT", "id", "name", "numofPosts", "createdBy", "Post", "postId", "userId"],
  HashtagsOrderByInput: ["id", "name", "numofPosts", "postId", "userId"],
  HashtagsWhereUniqueInput: ["id"],
  HashtagsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "numofPosts", "postId", "userId"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "postedby", "postedtime", "ProjectGroup", "userId", "files", "comments", "Post", "postId", "PostComment", "DownVotes", "Upvotes", "Topics", "attachmentsId"],
  PostOrderByInput: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  ProjectGroupWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "members", "isCommunity", "posts", "postId"],
  ProjectGroupOrderByInput: ["id", "title", "description", "isCommunity", "postId"],
  ProjectGroupWhereUniqueInput: ["id"],
  ProjectGroupScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "isCommunity", "postId"],
  OauthConnectionWhereInput: ["AND", "OR", "NOT", "id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user", "userId"],
  OauthConnectionOrderByInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionWhereUniqueInput: ["id"],
  OauthConnectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "profileId", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "projectGroupId", "Post", "PostComment", "Topics"],
  UserOrderByInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "user", "avatarURL", "bio"],
  UserProfileOrderByInput: ["id", "avatarURL", "bio"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "avatarURL", "bio"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "logoUrl", "bannerUrl", "owner", "ownerId", "members", "likers", "followers"],
  ProjectOrderByInput: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectWhereUniqueInput: ["id"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  PostCommentCreateInput: ["id", "body", "postedtime", "attachments", "postedby", "post"],
  PostCommentUpdateInput: ["id", "body", "postedtime", "attachments", "postedby", "post"],
  PostCommentCreateManyInput: ["id", "body", "postedtime", "userId", "postId", "attachments"],
  PostCommentUpdateManyMutationInput: ["id", "body", "postedtime", "attachments"],
  AttachmentsCreateInput: ["id", "attachmentURL", "type", "Post"],
  AttachmentsUpdateInput: ["id", "attachmentURL", "type", "Post"],
  AttachmentsCreateManyInput: ["id", "attachmentURL", "type"],
  AttachmentsUpdateManyMutationInput: ["id", "attachmentURL", "type"],
  HashtagsCreateInput: ["id", "name", "numofPosts", "createdBy", "Post"],
  HashtagsUpdateInput: ["id", "name", "numofPosts", "createdBy", "Post"],
  HashtagsCreateManyInput: ["id", "name", "numofPosts", "postId", "userId"],
  HashtagsUpdateManyMutationInput: ["id", "name", "numofPosts"],
  PostCreateInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "PostComment", "Topics"],
  PostUpdateInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "PostComment", "Topics"],
  PostCreateManyInput: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  PostUpdateManyMutationInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes"],
  ProjectGroupCreateInput: ["id", "title", "description", "isCommunity", "members", "posts"],
  ProjectGroupUpdateInput: ["id", "title", "description", "isCommunity", "members", "posts"],
  ProjectGroupCreateManyInput: ["id", "title", "description", "isCommunity", "postId"],
  ProjectGroupUpdateManyMutationInput: ["id", "title", "description", "isCommunity"],
  OauthConnectionCreateInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionUpdateInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "user"],
  OauthConnectionCreateManyInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionUpdateManyMutationInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  UserCreateInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserUpdateInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateManyInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  UserUpdateManyMutationInput: ["id", "createdAt", "username", "email", "joinDate", "hydra"],
  UserProfileCreateInput: ["id", "avatarURL", "bio", "user"],
  UserProfileUpdateInput: ["id", "avatarURL", "bio", "user"],
  UserProfileCreateManyInput: ["id", "avatarURL", "bio"],
  UserProfileUpdateManyMutationInput: ["id", "avatarURL", "bio"],
  ProjectCreateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers"],
  ProjectUpdateInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers", "followers"],
  ProjectCreateManyInput: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId"],
  ProjectUpdateManyMutationInput: ["id", "title", "description", "logoUrl", "bannerUrl"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostRelationFilter: ["is", "isNot"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumAttachmentTypesFilter: ["equals", "in", "notIn", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  EnumAttachmentTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  ProjectGroupListRelationFilter: ["every", "some", "none"],
  AttachmentsRelationFilter: ["is", "isNot"],
  PostCommentListRelationFilter: ["every", "some", "none"],
  HashtagsListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  BoolFilter: ["equals", "not"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumOauthConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  EnumOauthConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileRelationFilter: ["is", "isNot"],
  ProjectListRelationFilter: ["every", "some", "none"],
  OauthConnectionListRelationFilter: ["every", "some", "none"],
  ProjectGroupRelationFilter: ["is", "isNot"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateNestedOneWithoutPostCommentInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutPostCommentInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPostCommentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutPostCommentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedManyWithoutFilesInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumAttachmentTypesFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutFilesInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTopicsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutTopicsInput: ["create", "connectOrCreate", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutTopicsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneWithoutTopicsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  ProjectGroupCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "createMany", "connect"],
  AttachmentsCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutCommentsInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagsCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPostInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectGroupUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  AttachmentsUpdateOneRequiredWithoutPostInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutPostInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagsUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutProjectGroupInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedOneWithoutProjectGroupInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutProjectGroupInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateOneRequiredWithoutProjectGroupInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  ProjectGroupCreateNestedOneWithoutMembersInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutPostedbyInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCommentCreateNestedManyWithoutPostedbyInput: ["create", "connectOrCreate", "createMany", "connect"],
  HashtagsCreateNestedManyWithoutCreatedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserProfileUpdateOneRequiredWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutMembersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutLikersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  OauthConnectionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectGroupUpdateOneWithoutMembersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  PostUpdateManyWithoutPostedbyInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCommentUpdateManyWithoutPostedbyInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  HashtagsUpdateManyWithoutCreatedByInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutOwnedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutAllProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutOwnedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateManyWithoutAllProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutLikedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowedProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumAttachmentTypesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumAttachmentTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumOauthConnectionServiceFilter: ["equals", "in", "notIn", "not"],
  NestedEnumOauthConnectionServiceWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateWithoutPostCommentInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "Topics"],
  UserCreateOrConnectWithoutPostCommentInput: ["where", "create"],
  PostCreateWithoutPostCommentInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "Topics"],
  PostCreateOrConnectWithoutPostCommentInput: ["where", "create"],
  UserUpsertWithoutPostCommentInput: ["update", "create"],
  UserUpdateWithoutPostCommentInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "Topics"],
  PostUpsertWithoutPostCommentInput: ["update", "create"],
  PostUpdateWithoutPostCommentInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "Topics"],
  PostCreateWithoutFilesInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "comments", "Post", "PostComment", "Topics"],
  PostCreateOrConnectWithoutFilesInput: ["where", "create"],
  PostCreateManyFilesInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutFilesInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutFilesInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutFilesInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  UserCreateWithoutTopicsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment"],
  UserCreateOrConnectWithoutTopicsInput: ["where", "create"],
  PostCreateWithoutTopicsInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "PostComment"],
  PostCreateOrConnectWithoutTopicsInput: ["where", "create"],
  UserUpsertWithoutTopicsInput: ["update", "create"],
  UserUpdateWithoutTopicsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment"],
  PostUpsertWithoutTopicsInput: ["update", "create"],
  PostUpdateWithoutTopicsInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "Post", "PostComment"],
  UserCreateWithoutPostInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "PostComment", "Topics"],
  UserCreateOrConnectWithoutPostInput: ["where", "create"],
  ProjectGroupCreateWithoutPostsInput: ["id", "title", "description", "isCommunity", "members"],
  ProjectGroupCreateOrConnectWithoutPostsInput: ["where", "create"],
  ProjectGroupCreateManyPostsInputEnvelope: ["data", "skipDuplicates"],
  AttachmentsCreateWithoutPostInput: ["id", "attachmentURL", "type"],
  AttachmentsCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCreateWithoutPostInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "PostComment", "Topics"],
  PostCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "Post", "PostComment", "Topics"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  PostCreateManyCommentsInputEnvelope: ["data", "skipDuplicates"],
  PostCommentCreateWithoutPostInput: ["id", "body", "postedtime", "attachments", "postedby"],
  PostCommentCreateOrConnectWithoutPostInput: ["where", "create"],
  PostCommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  HashtagsCreateWithoutPostInput: ["id", "name", "numofPosts", "createdBy"],
  HashtagsCreateOrConnectWithoutPostInput: ["where", "create"],
  HashtagsCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPostInput: ["update", "create"],
  UserUpdateWithoutPostInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "PostComment", "Topics"],
  ProjectGroupUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  ProjectGroupUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  ProjectGroupUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  ProjectGroupScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "isCommunity", "postId"],
  AttachmentsUpsertWithoutPostInput: ["update", "create"],
  AttachmentsUpdateWithoutPostInput: ["id", "attachmentURL", "type"],
  PostUpsertWithoutPostInput: ["update", "create"],
  PostUpdateWithoutPostInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "comments", "PostComment", "Topics"],
  PostUpsertWithWhereUniqueWithoutCommentsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCommentsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCommentsInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  PostCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "body", "postedtime", "userId", "postId", "attachments"],
  HashtagsUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  HashtagsUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  HashtagsUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  HashtagsScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "numofPosts", "postId", "userId"],
  UserCreateWithoutProjectGroupInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutProjectGroupInput: ["where", "create"],
  UserCreateManyProjectGroupInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutProjectGroupInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "files", "comments", "Post", "PostComment", "Topics"],
  PostCreateOrConnectWithoutProjectGroupInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutProjectGroupInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutProjectGroupInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutProjectGroupInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  PostUpsertWithoutProjectGroupInput: ["update", "create"],
  PostUpdateWithoutProjectGroupInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "files", "comments", "Post", "PostComment", "Topics"],
  UserCreateWithoutOauthConnectionsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutOauthConnectionsInput: ["where", "create"],
  UserUpsertWithoutOauthConnectionsInput: ["update", "create"],
  UserUpdateWithoutOauthConnectionsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserProfileCreateWithoutUserInput: ["id", "avatarURL", "bio"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectCreateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "members", "likers", "followers"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutMembersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "likers", "followers"],
  ProjectCreateOrConnectWithoutMembersInput: ["where", "create"],
  ProjectCreateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "followers"],
  ProjectCreateOrConnectWithoutLikersInput: ["where", "create"],
  ProjectCreateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers"],
  ProjectCreateOrConnectWithoutFollowersInput: ["where", "create"],
  OauthConnectionCreateWithoutUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  OauthConnectionCreateOrConnectWithoutUserInput: ["where", "create"],
  OauthConnectionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFollowersInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  ProjectGroupCreateWithoutMembersInput: ["id", "title", "description", "isCommunity", "posts"],
  ProjectGroupCreateOrConnectWithoutMembersInput: ["where", "create"],
  PostCreateWithoutPostedbyInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "ProjectGroup", "files", "comments", "Post", "PostComment", "Topics"],
  PostCreateOrConnectWithoutPostedbyInput: ["where", "create"],
  PostCreateManyPostedbyInputEnvelope: ["data", "skipDuplicates"],
  PostCommentCreateWithoutPostedbyInput: ["id", "body", "postedtime", "attachments", "post"],
  PostCommentCreateOrConnectWithoutPostedbyInput: ["where", "create"],
  PostCommentCreateManyPostedbyInputEnvelope: ["data", "skipDuplicates"],
  HashtagsCreateWithoutCreatedByInput: ["id", "name", "numofPosts", "Post"],
  HashtagsCreateOrConnectWithoutCreatedByInput: ["where", "create"],
  HashtagsCreateManyCreatedByInputEnvelope: ["data", "skipDuplicates"],
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
  ProjectGroupUpsertWithoutMembersInput: ["update", "create"],
  ProjectGroupUpdateWithoutMembersInput: ["id", "title", "description", "isCommunity", "posts"],
  PostUpsertWithWhereUniqueWithoutPostedbyInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutPostedbyInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutPostedbyInput: ["where", "data"],
  PostCommentUpsertWithWhereUniqueWithoutPostedbyInput: ["where", "update", "create"],
  PostCommentUpdateWithWhereUniqueWithoutPostedbyInput: ["where", "data"],
  PostCommentUpdateManyWithWhereWithoutPostedbyInput: ["where", "data"],
  HashtagsUpsertWithWhereUniqueWithoutCreatedByInput: ["where", "update", "create"],
  HashtagsUpdateWithWhereUniqueWithoutCreatedByInput: ["where", "data"],
  HashtagsUpdateManyWithWhereWithoutCreatedByInput: ["where", "data"],
  UserCreateWithoutProfileInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateWithoutOwnedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutOwnedProjectsInput: ["where", "create"],
  UserCreateWithoutAllProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutAllProjectsInput: ["where", "create"],
  UserCreateWithoutLikedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutLikedProjectsInput: ["where", "create"],
  UserCreateWithoutFollowedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserCreateOrConnectWithoutFollowedProjectsInput: ["where", "create"],
  UserUpsertWithoutOwnedProjectsInput: ["update", "create"],
  UserUpdateWithoutOwnedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserUpsertWithWhereUniqueWithoutAllProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutAllProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutAllProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutLikedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLikedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLikedProjectsInput: ["where", "data"],
  UserUpsertWithWhereUniqueWithoutFollowedProjectsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowedProjectsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowedProjectsInput: ["where", "data"],
  PostCreateManyFilesInput: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes"],
  PostUpdateWithoutFilesInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "comments", "Post", "PostComment", "Topics"],
  ProjectGroupCreateManyPostsInput: ["id", "title", "description", "isCommunity"],
  PostCreateManyCommentsInput: ["id", "title", "description", "postedtime", "userId", "DownVotes", "Upvotes", "attachmentsId"],
  PostCommentCreateManyPostInput: ["id", "body", "postedtime", "userId", "attachments"],
  HashtagsCreateManyPostInput: ["id", "name", "numofPosts", "userId"],
  ProjectGroupUpdateWithoutPostsInput: ["id", "title", "description", "isCommunity", "members"],
  PostUpdateWithoutCommentsInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "postedby", "ProjectGroup", "files", "Post", "PostComment", "Topics"],
  PostCommentUpdateWithoutPostInput: ["id", "body", "postedtime", "attachments", "postedby"],
  HashtagsUpdateWithoutPostInput: ["id", "name", "numofPosts", "createdBy"],
  UserCreateManyProjectGroupInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId"],
  UserUpdateWithoutProjectGroupInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "Post", "PostComment", "Topics"],
  ProjectCreateManyOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl"],
  OauthConnectionCreateManyUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  PostCreateManyPostedbyInput: ["id", "title", "description", "postedtime", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  PostCommentCreateManyPostedbyInput: ["id", "body", "postedtime", "postId", "attachments"],
  HashtagsCreateManyCreatedByInput: ["id", "name", "numofPosts", "postId"],
  ProjectUpdateWithoutOwnerInput: ["id", "title", "description", "logoUrl", "bannerUrl", "members", "likers", "followers"],
  ProjectUpdateWithoutMembersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "likers", "followers"],
  ProjectUpdateWithoutLikersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "followers"],
  ProjectUpdateWithoutFollowersInput: ["id", "title", "description", "logoUrl", "bannerUrl", "owner", "members", "likers"],
  OauthConnectionUpdateWithoutUserInput: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary"],
  UserUpdateWithoutFollowersInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserUpdateWithoutFollowingInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "followedProjects", "oauthConnections", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  PostUpdateWithoutPostedbyInput: ["id", "title", "description", "postedtime", "DownVotes", "Upvotes", "ProjectGroup", "files", "comments", "Post", "PostComment", "Topics"],
  PostCommentUpdateWithoutPostedbyInput: ["id", "body", "postedtime", "attachments", "post"],
  HashtagsUpdateWithoutCreatedByInput: ["id", "name", "numofPosts", "Post"],
  UserUpdateWithoutAllProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "likedProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserUpdateWithoutLikedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "followedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"],
  UserUpdateWithoutFollowedProjectsInput: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profile", "ownedProjects", "allProjects", "likedProjects", "oauthConnections", "following", "followers", "ProjectGroup", "Post", "PostComment", "Topics"]
};
const outputsInfo = {
  AggregatePostComment: ["_count", "_min", "_max"],
  PostCommentGroupBy: ["id", "body", "postedtime", "userId", "postId", "attachments", "_count", "_min", "_max"],
  AggregateAttachments: ["_count", "_min", "_max"],
  AttachmentsGroupBy: ["id", "attachmentURL", "type", "_count", "_min", "_max"],
  AggregateHashtags: ["_count", "_avg", "_sum", "_min", "_max"],
  HashtagsGroupBy: ["id", "name", "numofPosts", "postId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProjectGroup: ["_count", "_min", "_max"],
  ProjectGroupGroupBy: ["id", "title", "description", "isCommunity", "postId", "_count", "_min", "_max"],
  AggregateOauthConnection: ["_count", "_min", "_max"],
  OauthConnectionGroupBy: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserProfile: ["_count", "_min", "_max"],
  UserProfileGroupBy: ["id", "avatarURL", "bio", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "title", "description", "logoUrl", "bannerUrl", "ownerId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PostCommentCountAggregate: ["id", "body", "postedtime", "userId", "postId", "attachments", "_all"],
  PostCommentMinAggregate: ["id", "body", "postedtime", "userId", "postId", "attachments"],
  PostCommentMaxAggregate: ["id", "body", "postedtime", "userId", "postId", "attachments"],
  AttachmentsCountAggregate: ["id", "attachmentURL", "type", "_all"],
  AttachmentsMinAggregate: ["id", "attachmentURL", "type"],
  AttachmentsMaxAggregate: ["id", "attachmentURL", "type"],
  HashtagsCountAggregate: ["id", "name", "numofPosts", "postId", "userId", "_all"],
  HashtagsAvgAggregate: ["numofPosts"],
  HashtagsSumAggregate: ["numofPosts"],
  HashtagsMinAggregate: ["id", "name", "numofPosts", "postId", "userId"],
  HashtagsMaxAggregate: ["id", "name", "numofPosts", "postId", "userId"],
  PostCountAggregate: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId", "_all"],
  PostAvgAggregate: ["DownVotes", "Upvotes"],
  PostSumAggregate: ["DownVotes", "Upvotes"],
  PostMinAggregate: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  PostMaxAggregate: ["id", "title", "description", "postedtime", "userId", "postId", "DownVotes", "Upvotes", "attachmentsId"],
  ProjectGroupCountAggregate: ["id", "title", "description", "isCommunity", "postId", "_all"],
  ProjectGroupMinAggregate: ["id", "title", "description", "isCommunity", "postId"],
  ProjectGroupMaxAggregate: ["id", "title", "description", "isCommunity", "postId"],
  OauthConnectionCountAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId", "_all"],
  OauthConnectionMinAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  OauthConnectionMaxAggregate: ["id", "oauthService", "email", "username", "oauthServiceUserId", "isPrimary", "userId"],
  UserCountAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId", "_all"],
  UserAvgAggregate: ["hydra"],
  UserSumAggregate: ["hydra"],
  UserMinAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
  UserMaxAggregate: ["id", "createdAt", "username", "email", "joinDate", "hydra", "profileId", "projectGroupId"],
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
  FindUniqueAttachmentsArgs: ["where"],
  FindFirstAttachmentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAttachmentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAttachmentsArgs: ["data"],
  CreateManyAttachmentsArgs: ["data", "skipDuplicates"],
  DeleteAttachmentsArgs: ["where"],
  UpdateAttachmentsArgs: ["data", "where"],
  DeleteManyAttachmentsArgs: ["where"],
  UpdateManyAttachmentsArgs: ["data", "where"],
  UpsertAttachmentsArgs: ["where", "create", "update"],
  AggregateAttachmentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAttachmentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueHashtagsArgs: ["where"],
  FindFirstHashtagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHashtagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateHashtagsArgs: ["data"],
  CreateManyHashtagsArgs: ["data", "skipDuplicates"],
  DeleteHashtagsArgs: ["where"],
  UpdateHashtagsArgs: ["data", "where"],
  DeleteManyHashtagsArgs: ["where"],
  UpdateManyHashtagsArgs: ["data", "where"],
  UpsertHashtagsArgs: ["where", "create", "update"],
  AggregateHashtagsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByHashtagsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueProjectGroupArgs: ["where"],
  FindFirstProjectGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectGroupArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProjectGroupArgs: ["data"],
  CreateManyProjectGroupArgs: ["data", "skipDuplicates"],
  DeleteProjectGroupArgs: ["where"],
  UpdateProjectGroupArgs: ["data", "where"],
  DeleteManyProjectGroupArgs: ["where"],
  UpdateManyProjectGroupArgs: ["data", "where"],
  UpsertProjectGroupArgs: ["where", "create", "update"],
  AggregateProjectGroupArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProjectGroupArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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







