import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function doesTaskLocationExist(
  projectId: string,
  locationName: string
) {
  const doesTaskLocationExist: boolean = !!(await prisma.taskLocation.findFirst(
    { where: { projectId, name: locationName } }
  ));
  if (doesTaskLocationExist) throw new Error("Location already exists");
}
