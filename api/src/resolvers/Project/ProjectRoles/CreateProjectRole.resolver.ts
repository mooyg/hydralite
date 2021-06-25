import {
    Arg,
    Ctx,
    Field,
    InputType,
    Mutation,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import ContextType from "~/types/Context.type";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { ProjectRole } from "~/typegql-types/ProjectRole";

@InputType()
export class CreateProjectRoleInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    projectId: string;

    @Field({ nullable: true })
    canAccessFeatureRequests?: boolean;

    @Field({ nullable: true })
    canAccessBugReports?: boolean;

    @Field({ nullable: true })
    canManageUsers?: boolean;

    @Field({ nullable: true })
    canManageRoles?: boolean;

    @Field({ nullable: true })
    canManageTasks?: boolean;

    @Field({ nullable: true })
    canCreateProjectAnnouncements?: boolean;

    @Field({ nullable: true })
    canModeratePosts?: boolean;

    @Field({ nullable: true })
    canManageProjectGroups?: boolean;

    @Field({ nullable: true })
    canGenerateProjectInvites?: boolean;

    @Field({ nullable: true })
    canViewRoadmap?: boolean;

    @Field({ nullable: true })
    canManageRoadmap?: boolean;

    @Field({ nullable: true })
    canScheduleRooms?: boolean;

    @Field({ nullable: true })
    canManageFundraisers?: boolean;

    @Field({ nullable: true })
    canManageThirdPartyApps?: boolean;

    @Field({ nullable: true })
    canManageProjectSurveys?: boolean;

    @Field({ nullable: true })
    canViewProjectInsights?: boolean;

    @Field({ nullable: true })
    canViewDeveloperInsights?: boolean;

    @Field({ nullable: true })
    canManageProjectWaitlists?: boolean;

    @Field({ nullable: true })
    canManageTesterOutsourcing?: boolean;

    @Field({ nullable: true })
    canWriteDeveloperReviews?: boolean;

    @Field({ nullable: true })
    canViewLogs?: boolean;
}

@Resolver()
export default class CreateProjectRoleResolver {
    @Mutation(() => ProjectRole)
    @UseMiddleware(isAuthenticated)
    async createProjectRole(
        @Arg("input") input: CreateProjectRoleInput,
        @Ctx() { req, prisma }: ContextType
    ): Promise<ProjectRole | null> {
        // retrieve the currently logged in user
        // const user: User = req.user as User;

        // TASK: only allow users with the role management permission to create roles
        const createdRole = await prisma.projectRole.create({
            data: {
                title: input.title,
                description: input.description || "",
                permissions: {
                    create: {
                        canAccessBugReports: !!input.canAccessBugReports,
                        canAccessFeatureRequests:
                            !!input.canAccessFeatureRequests,
                        canCreateProjectAnnouncements:
                            !!input.canCreateProjectAnnouncements,
                        canGenerateProjectInvites:
                            !!input.canGenerateProjectInvites,
                        canManageFundraisers: !!input.canManageFundraisers,
                        canManageProjectGroups: !!input.canManageProjectGroups,
                        canManageProjectSurveys:
                            !!input.canManageProjectSurveys,
                        canManageProjectWaitlists:
                            !!input.canManageProjectWaitlists,
                        canManageRoadmap: !!input.canManageRoadmap,
                        canManageRoles: !!input.canManageRoles,
                        canManageTasks: !!input.canManageTasks,
                        canManageTesterOutsourcing:
                            !!input.canManageTesterOutsourcing,
                        canManageThirdPartyApps:
                            !!input.canManageThirdPartyApps,
                        canManageUsers: !!input.canManageUsers,
                        canModeratePosts: !!input.canModeratePosts,
                        canScheduleRooms: !!input.canScheduleRooms,
                        canViewDeveloperInsights:
                            !!input.canViewDeveloperInsights,
                        canViewLogs: !!input.canViewLogs,
                        canViewProjectInsights: !!input.canViewProjectInsights,
                        canViewRoadmap: !!input.canViewRoadmap,
                        canWriteDeveloperReviews:
                            !!input.canWriteDeveloperReviews,
                    },
                },
                project: {
                    connect: {
                        id: input.projectId,
                    },
                },
                assignedMembers: {}, // TASK: Allow the ability to specify member id's that can get this role
            },
        });

        console.log(createdRole);

        return createdRole;
    }
}
