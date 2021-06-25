import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput";
import { ProjectMemberPermissionsCreateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectMemberInput";
import { ProjectMemberPermissionsUpdateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsUpdateWithoutProjectMemberInput";
import { ProjectMemberPermissionsUpsertWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsUpsertWithoutProjectMemberInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsUpdateOneWithoutProjectMemberInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectMemberInput, {
    nullable: true
  })
  create?: ProjectMemberPermissionsCreateWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput, {
    nullable: true
  })
  connectOrCreate?: ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpsertWithoutProjectMemberInput, {
    nullable: true
  })
  upsert?: ProjectMemberPermissionsUpsertWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectMemberPermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsUpdateWithoutProjectMemberInput, {
    nullable: true
  })
  update?: ProjectMemberPermissionsUpdateWithoutProjectMemberInput | undefined;
}
