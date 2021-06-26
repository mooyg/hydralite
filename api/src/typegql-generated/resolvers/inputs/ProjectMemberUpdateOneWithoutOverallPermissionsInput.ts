import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateOrConnectWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateOrConnectWithoutOverallPermissionsInput";
import { ProjectMemberCreateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateWithoutOverallPermissionsInput";
import { ProjectMemberUpdateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberUpdateWithoutOverallPermissionsInput";
import { ProjectMemberUpsertWithoutOverallPermissionsInput } from "../inputs/ProjectMemberUpsertWithoutOverallPermissionsInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberUpdateOneWithoutOverallPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutOverallPermissionsInput, {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutOverallPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateOrConnectWithoutOverallPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutOverallPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberUpsertWithoutOverallPermissionsInput, {
    nullable: true
  })
  upsert?: ProjectMemberUpsertWithoutOverallPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberUpdateWithoutOverallPermissionsInput, {
    nullable: true
  })
  update?: ProjectMemberUpdateWithoutOverallPermissionsInput | undefined;
}
