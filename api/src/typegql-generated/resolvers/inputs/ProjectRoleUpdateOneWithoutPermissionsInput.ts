import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateOrConnectWithoutPermissionsInput } from "../inputs/ProjectRoleCreateOrConnectWithoutPermissionsInput";
import { ProjectRoleCreateWithoutPermissionsInput } from "../inputs/ProjectRoleCreateWithoutPermissionsInput";
import { ProjectRoleUpdateWithoutPermissionsInput } from "../inputs/ProjectRoleUpdateWithoutPermissionsInput";
import { ProjectRoleUpsertWithoutPermissionsInput } from "../inputs/ProjectRoleUpsertWithoutPermissionsInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleUpdateOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleUpsertWithoutPermissionsInput, {
    nullable: true
  })
  upsert?: ProjectRoleUpsertWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectRoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleUpdateWithoutPermissionsInput, {
    nullable: true
  })
  update?: ProjectRoleUpdateWithoutPermissionsInput | undefined;
}
