import { isAuthenticated } from "src/middleware/isAuthenticated.middleware";
import { Project } from "~/typegql-types/Project";
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
import { User } from "@prisma/client";

@InputType()
export class JoinProjectInput {
    @Field()
    projectId: string;
}

@Resolver()
export class JoinProject {
    @UseMiddleware(isAuthenticated)
    @Mutation(() => Project)
    async joinProject(
        @Ctx() { req: { user: _ }, prisma }: ContextType,
        @Arg("input") { projectId }: JoinProjectInput
    ): Promise<Project> {
        const user: User = _ as any;
        const projectToJoin = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
        const isUserAlreadyMember = !!(await prisma.projectMember.findFirst({
            where: {
                projectId: projectToJoin?.id,
                userId: user.id,
            },
        }));

        // Validation
        if (!projectToJoin) throw new Error("Invalid project.");
        if (isUserAlreadyMember) throw new Error("Already a member.");

        const updatedProject = await prisma.project.update({
            where: {
                id: projectToJoin.id,
            },
            data: {
                members: {
                    create: [
                        {
                            user: { connect: { id: user.id } },
                            awaitingApproval:
                                projectToJoin.newJoineesRequireApproval,
                        },
                    ],
                },
            },
            include: {
                members: true,
            },
        });

        console.log(updatedProject);

        return updatedProject;
    }
}
