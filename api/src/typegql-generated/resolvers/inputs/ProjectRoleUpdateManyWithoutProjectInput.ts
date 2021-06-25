import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateManyProjectInputEnvelope } from "../inputs/ProjectRoleCreateManyProjectInputEnvelope";
import { ProjectRoleCreateOrConnectWithoutProjectInput } from "../inputs/ProjectRoleCreateOrConnectWithoutProjectInput";
import { ProjectRoleCreateWithoutProjectInput } from "../inputs/ProjectRoleCreateWithoutProjectInput";
import { ProjectRoleScalarWhereInput } from "../inputs/ProjectRoleScalarWhereInput";
import { ProjectRoleUpdateManyWithWhereWithoutProjectInput } from "../inputs/ProjectRoleUpdateManyWithWhereWithoutProjectInput";
import { ProjectRoleUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectRoleUpdateWithWhereUniqueWithoutProjectInput";
import { ProjectRoleUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectRoleUpsertWithWhereUniqueWithoutProjectInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: ProjectRoleUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectRoleCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectRoleUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: ProjectRoleUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: ProjectRoleUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectRoleScalarWhereInput[] | undefined;
}
