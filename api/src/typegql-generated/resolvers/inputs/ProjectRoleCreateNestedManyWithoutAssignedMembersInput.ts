import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateOrConnectWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateOrConnectWithoutAssignedMembersInput";
import { ProjectRoleCreateWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateWithoutAssignedMembersInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateNestedManyWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateWithoutAssignedMembersInput], {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleCreateOrConnectWithoutAssignedMembersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectRoleWhereUniqueInput[] | undefined;
}
