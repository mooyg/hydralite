import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateOrConnectWithoutRolesInput } from "../inputs/ProjectMemberCreateOrConnectWithoutRolesInput";
import { ProjectMemberCreateWithoutRolesInput } from "../inputs/ProjectMemberCreateWithoutRolesInput";
import { ProjectMemberScalarWhereInput } from "../inputs/ProjectMemberScalarWhereInput";
import { ProjectMemberUpdateManyWithWhereWithoutRolesInput } from "../inputs/ProjectMemberUpdateManyWithWhereWithoutRolesInput";
import { ProjectMemberUpdateWithWhereUniqueWithoutRolesInput } from "../inputs/ProjectMemberUpdateWithWhereUniqueWithoutRolesInput";
import { ProjectMemberUpsertWithWhereUniqueWithoutRolesInput } from "../inputs/ProjectMemberUpsertWithWhereUniqueWithoutRolesInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateManyWithoutRolesInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutRolesInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutRolesInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpsertWithWhereUniqueWithoutRolesInput], {
    nullable: true
  })
  upsert?: ProjectMemberUpsertWithWhereUniqueWithoutRolesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateWithWhereUniqueWithoutRolesInput], {
    nullable: true
  })
  update?: ProjectMemberUpdateWithWhereUniqueWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberUpdateManyWithWhereWithoutRolesInput], {
    nullable: true
  })
  updateMany?: ProjectMemberUpdateManyWithWhereWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectMemberScalarWhereInput[] | undefined;
}
