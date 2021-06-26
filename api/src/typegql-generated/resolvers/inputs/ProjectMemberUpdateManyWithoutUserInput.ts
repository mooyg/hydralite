import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyUserInputEnvelope } from "../inputs/ProjectMemberCreateManyUserInputEnvelope";
import { ProjectMemberCreateOrConnectWithoutUserInput } from "../inputs/ProjectMemberCreateOrConnectWithoutUserInput";
import { ProjectMemberCreateWithoutUserInput } from "../inputs/ProjectMemberCreateWithoutUserInput";
import { ProjectMemberScalarWhereInput } from "../inputs/ProjectMemberScalarWhereInput";
import { ProjectMemberUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectMemberUpdateManyWithWhereWithoutUserInput";
import { ProjectMemberUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectMemberUpdateWithWhereUniqueWithoutUserInput";
import { ProjectMemberUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectMemberUpsertWithWhereUniqueWithoutUserInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectMemberCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectMemberScalarWhereInput[] | undefined;
}
