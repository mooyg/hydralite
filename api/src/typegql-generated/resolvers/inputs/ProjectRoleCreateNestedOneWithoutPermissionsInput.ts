import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateOrConnectWithoutPermissionsInput } from "../inputs/ProjectRoleCreateOrConnectWithoutPermissionsInput";
import { ProjectRoleCreateWithoutPermissionsInput } from "../inputs/ProjectRoleCreateWithoutPermissionsInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateNestedOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectRoleCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectRoleWhereUniqueInput | undefined;
}
