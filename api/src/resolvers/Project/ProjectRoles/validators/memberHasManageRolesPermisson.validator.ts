import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function memberHasManageRolesPermisson(userId: string) {
    // Find the projectMember that corresponds to logged in user
    const userCorrespondingProjectMember = await prisma.projectMember.findFirst(
        { where: { userId: userId }, include: { overallPermissions: true } }
    );

    if (!userCorrespondingProjectMember)
        throw new Error("You arent a member of this project.");

    // only allow users with the role management permission to manage roles
    if (!userCorrespondingProjectMember.overallPermissions!.canManageRoles)
        throw new Error("This action requires elevation.");
}
