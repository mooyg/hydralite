import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function memberHasManageTasksPermisson(
  userId: string,
  projectId: string
) {
  // Find the projectMember that corresponds to logged in user
  const userCorrespondingProjectMember = await prisma.projectMember.findFirst({
    where: { userId, projectId },
    include: { overallPermissions: true },
  });

  if (!userCorrespondingProjectMember)
    throw new Error("You arent a member of this project.");

  // only allow users with the task management permission to manage tasks
  if (!userCorrespondingProjectMember.overallPermissions!.canManageTasks)
    throw new Error("This action requires elevation.");
}
