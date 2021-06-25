import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput";
import { ProjectMemberPermissionsCreateWithoutProjectMemberInput } from "../inputs/ProjectMemberPermissionsCreateWithoutProjectMemberInput";
import { ProjectMemberPermissionsWhereUniqueInput } from "../inputs/ProjectMemberPermissionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberPermissionsCreateNestedOneWithoutProjectMemberInput {
  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateWithoutProjectMemberInput, {
    nullable: true
  })
  create?: ProjectMemberPermissionsCreateWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput, {
    nullable: true
  })
  connectOrCreate?: ProjectMemberPermissionsCreateOrConnectWithoutProjectMemberInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberPermissionsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectMemberPermissionsWhereUniqueInput | undefined;
}
