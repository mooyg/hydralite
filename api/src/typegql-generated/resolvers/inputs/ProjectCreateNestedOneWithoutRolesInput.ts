import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutRolesInput } from "../inputs/ProjectCreateOrConnectWithoutRolesInput";
import { ProjectCreateWithoutRolesInput } from "../inputs/ProjectCreateWithoutRolesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutRolesInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutRolesInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutRolesInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutRolesInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
