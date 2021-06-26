import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyUserInputEnvelope } from "../inputs/ProjectMemberCreateManyUserInputEnvelope";
import { ProjectMemberCreateOrConnectWithoutUserInput } from "../inputs/ProjectMemberCreateOrConnectWithoutUserInput";
import { ProjectMemberCreateWithoutUserInput } from "../inputs/ProjectMemberCreateWithoutUserInput";
import { ProjectMemberWhereUniqueInput } from "../inputs/ProjectMemberWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectMemberCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectMemberCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectMemberCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectMemberWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectMemberWhereUniqueInput[] | undefined;
}
