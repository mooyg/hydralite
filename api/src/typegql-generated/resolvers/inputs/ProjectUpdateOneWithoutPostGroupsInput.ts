import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutPostGroupsInput } from "../inputs/ProjectCreateOrConnectWithoutPostGroupsInput";
import { ProjectCreateWithoutPostGroupsInput } from "../inputs/ProjectCreateWithoutPostGroupsInput";
import { ProjectUpdateWithoutPostGroupsInput } from "../inputs/ProjectUpdateWithoutPostGroupsInput";
import { ProjectUpsertWithoutPostGroupsInput } from "../inputs/ProjectUpsertWithoutPostGroupsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneWithoutPostGroupsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutPostGroupsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutPostGroupsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutPostGroupsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutPostGroupsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutPostGroupsInput | undefined;
}
