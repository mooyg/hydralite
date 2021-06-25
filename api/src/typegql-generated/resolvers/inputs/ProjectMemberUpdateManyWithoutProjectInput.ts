import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyProjectInputEnvelope } from "../inputs/ProjectMemberCreateManyProjectInputEnvelope";
import { ProjectMemberCreateOrConnectWithoutProjectInput } from "../inputs/ProjectMemberCreateOrConnectWithoutProjectInput";
import { ProjectMemberCreateWithoutProjectInput } from "../inputs/ProjectMemberCreateWithoutProjectInput";
import { ProjectMemberScalarWhereInput } from "../inputs/ProjectMemberScalarWhereInput";
import { ProjectMemberUpdateManyWithWhereWithoutProjectInput } from "../inputs/ProjectMemberUpdateManyWithWhereWithoutProjectInput";
import { ProjectMemberUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectMemberUpdateWithWhereUniqueWithoutProjectInput";
import { ProjectMemberUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/ProjectMemberUpsertWithWhereUniqueWithoutProjectInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectMemberCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectMemberWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectMemberScalarWhereInput[] | undefined;
}
