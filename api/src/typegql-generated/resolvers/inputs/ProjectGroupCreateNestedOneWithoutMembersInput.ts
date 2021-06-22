import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateOrConnectWithoutMembersInput } from "../inputs/ProjectGroupCreateOrConnectWithoutMembersInput";
import { ProjectGroupCreateWithoutMembersInput } from "../inputs/ProjectGroupCreateWithoutMembersInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateNestedOneWithoutMembersInput {
  @TypeGraphQL.Field(_type => ProjectGroupCreateWithoutMembersInput, {
    nullable: true
  })
  create?: ProjectGroupCreateWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupCreateOrConnectWithoutMembersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectGroupCreateOrConnectWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectGroupWhereUniqueInput | undefined;
}
