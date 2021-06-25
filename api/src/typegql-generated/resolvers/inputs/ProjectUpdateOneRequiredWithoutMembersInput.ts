import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutMembersInput } from "../inputs/ProjectCreateOrConnectWithoutMembersInput";
import { ProjectCreateWithoutMembersInput } from "../inputs/ProjectCreateWithoutMembersInput";
import { ProjectUpdateWithoutMembersInput } from "../inputs/ProjectUpdateWithoutMembersInput";
import { ProjectUpsertWithoutMembersInput } from "../inputs/ProjectUpsertWithoutMembersInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutMembersInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutMembersInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutMembersInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutMembersInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutMembersInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutMembersInput | undefined;
}
