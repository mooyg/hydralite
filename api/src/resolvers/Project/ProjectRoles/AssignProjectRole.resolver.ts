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
import { ProjectMember } from "~/typegql-types/ProjectMember";
import { User } from "@prisma/client";
import { manageRolesPermissonValidator } from "./validators/manageRolesPermisson.validator";
@InputType()
export class AssignProjectRoleInput {
    @Field()
    memberId: string;

    @Field()
    roleId: string;
}

@Resolver()
export default class AssignProjectRoleResolver {
    @Mutation(() => ProjectMember)
    @UseMiddleware(isAuthenticated)
    async assignProjectRole(
        @Arg("input") input: AssignProjectRoleInput,
        @Ctx() { req, prisma }: ContextType
    ): Promise<ProjectMember | null> {
        // retrieve the currently logged in user
        const user: User = req.user as User;

        // validators
        await manageRolesPermissonValidator(user.id);

        const updatedMember = await prisma.projectMember.update({
            where: { id: input.memberId },
            data: { roles: { connect: { id: input.roleId } } },
        });

        // TASK: run algo to update project members common permissions as well

        return updatedMember;
    }
}
