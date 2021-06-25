import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyProjectInputEnvelope } from "../inputs/ProjectMemberCreateManyProjectInputEnvelope";
import { ProjectMemberCreateOrConnectWithoutProjectInput } from "../inputs/ProjectMemberCreateOrConnectWithoutProjectInput";
import { ProjectMemberCreateWithoutProjectInput } from "../inputs/ProjectMemberCreateWithoutProjectInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutProjectInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectMemberCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput[] | undefined;
}
