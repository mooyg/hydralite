import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateOrConnectWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateOrConnectWithoutAssignedMembersInput";
import { ProjectRoleCreateWithoutAssignedMembersInput } from "../inputs/ProjectRoleCreateWithoutAssignedMembersInput";
import { ProjectRoleScalarWhereInput } from "../inputs/ProjectRoleScalarWhereInput";
import { ProjectRoleUpdateManyWithWhereWithoutAssignedMembersInput } from "../inputs/ProjectRoleUpdateManyWithWhereWithoutAssignedMembersInput";
import { ProjectRoleUpdateWithWhereUniqueWithoutAssignedMembersInput } from "../inputs/ProjectRoleUpdateWithWhereUniqueWithoutAssignedMembersInput";
import { ProjectRoleUpsertWithWhereUniqueWithoutAssignedMembersInput } from "../inputs/ProjectRoleUpsertWithWhereUniqueWithoutAssignedMembersInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateManyWithoutAssignedMembersInput {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateWithoutAssignedMembersInput], {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleCreateOrConnectWithoutAssignedMembersInput], {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleUpsertWithWhereUniqueWithoutAssignedMembersInput], {
    nullable: true
  })
  upsert?: ProjectRoleUpsertWithWhereUniqueWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectRoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectRoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectRoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectRoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleUpdateWithWhereUniqueWithoutAssignedMembersInput], {
    nullable: true
  })
  update?: ProjectRoleUpdateWithWhereUniqueWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleUpdateManyWithWhereWithoutAssignedMembersInput], {
    nullable: true
  })
  updateMany?: ProjectRoleUpdateManyWithWhereWithoutAssignedMembersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectRoleScalarWhereInput[] | undefined;
}
