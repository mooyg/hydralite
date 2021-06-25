import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateOrConnectWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateOrConnectWithoutOverallPermissionsInput";
import { ProjectMemberCreateWithoutOverallPermissionsInput } from "../inputs/ProjectMemberCreateWithoutOverallPermissionsInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateNestedOneWithoutOverallPermissionsInput {
  @TypeGraphQL.Field(_type => ProjectMemberCreateWithoutOverallPermissionsInput, {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutOverallPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateOrConnectWithoutOverallPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutOverallPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput | undefined;
}
