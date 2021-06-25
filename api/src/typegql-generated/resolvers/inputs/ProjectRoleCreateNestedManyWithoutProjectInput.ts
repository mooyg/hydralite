import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateManyProjectInputEnvelope } from "../inputs/ProjectRoleCreateManyProjectInputEnvelope";
import { ProjectRoleCreateOrConnectWithoutProjectInput } from "../inputs/ProjectRoleCreateOrConnectWithoutProjectInput";
import { ProjectRoleCreateWithoutProjectInput } from "../inputs/ProjectRoleCreateWithoutProjectInput";
import { ProjectRoleWhereUniqueInput } from "../inputs/ProjectRoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectRoleCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectRoleCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectRoleCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectRoleWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectRoleWhereUniqueInput[] | undefined;
}
