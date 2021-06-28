import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function doesTaskCategoryExist(
  projectId: string,
  categoryName: string
) {
  const doesTaskCategoryExist: boolean = !!(await prisma.taskCategory.findFirst(
    { where: { projectId, name: categoryName } }
  ));

  if (doesTaskCategoryExist) throw new Error("Category already exists");
}
