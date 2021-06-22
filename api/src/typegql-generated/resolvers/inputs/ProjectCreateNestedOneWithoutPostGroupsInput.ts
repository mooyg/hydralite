import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutPostGroupsInput } from "../inputs/ProjectCreateOrConnectWithoutPostGroupsInput";
import { ProjectCreateWithoutPostGroupsInput } from "../inputs/ProjectCreateWithoutPostGroupsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutPostGroupsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutPostGroupsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
