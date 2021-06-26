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
import { memberHasManageRolesPermisson } from "./validators/memberHasManageRolesPermisson.validator";
import { doesRoleExist } from "./validators/doesRoleExist";
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
        await memberHasManageRolesPermisson(user.id);
        const role = await doesRoleExist(input.roleId);

        // add role to member
        const memberWithUpdatedRole = await prisma.projectMember.update({
            where: { id: input.memberId },
            data: { roles: { connect: { id: input.roleId } } },
            include: { overallPermissions: true },
        });

        // update members common permission after adding a new role
        const commonPerms = { ...memberWithUpdatedRole.overallPermissions };
        Object.keys(role.permissions).forEach((permKey) => {
            // ignore model fields that are not permission
            if (permKey === "id") return;

            const rolePerm: boolean = (role.permissions as any)[permKey];
            let commonPerm: boolean = (commonPerms as any)[permKey];

            // if the role perm is set to true but the common perm is false, override the common perm
            if (rolePerm && !commonPerm) (commonPerms as any)[permKey] = true;
        });

        console.log(commonPerms);
        const memberWithUpdatedOverallPerms = await prisma.projectMember.update(
            {
                where: { id: input.memberId },
                data: { overallPermissions: { update: { ...commonPerms } } },
            }
        );
        return memberWithUpdatedOverallPerms;
    }
}
