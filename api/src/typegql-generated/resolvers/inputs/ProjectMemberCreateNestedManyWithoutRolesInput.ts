import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateOrConnectWithoutRolesInput } from "../inputs/ProjectMemberCreateOrConnectWithoutRolesInput";
import { ProjectMemberCreateWithoutRolesInput } from "../inputs/ProjectMemberCreateWithoutRolesInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateNestedManyWithoutRolesInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutRolesInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutRolesInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput[] | undefined;
}
