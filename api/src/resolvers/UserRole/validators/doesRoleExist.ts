import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function doesRoleExist(roleId: string) {
    const role = await prisma.projectRole.findUnique({
        where: { id: roleId },
        include: { permissions: true },
    });
    if (!role) throw new Error("Invalid role.");

    return role;
}
