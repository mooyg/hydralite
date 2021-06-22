import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateManyPostsInputEnvelope } from "../inputs/ProjectGroupCreateManyPostsInputEnvelope";
import { ProjectGroupCreateOrConnectWithoutPostsInput } from "../inputs/ProjectGroupCreateOrConnectWithoutPostsInput";
import { ProjectGroupCreateWithoutPostsInput } from "../inputs/ProjectGroupCreateWithoutPostsInput";
import { ProjectGroupScalarWhereInput } from "../inputs/ProjectGroupScalarWhereInput";
import { ProjectGroupUpdateManyWithWhereWithoutPostsInput } from "../inputs/ProjectGroupUpdateManyWithWhereWithoutPostsInput";
import { ProjectGroupUpdateWithWhereUniqueWithoutPostsInput } from "../inputs/ProjectGroupUpdateWithWhereUniqueWithoutPostsInput";
import { ProjectGroupUpsertWithWhereUniqueWithoutPostsInput } from "../inputs/ProjectGroupUpsertWithWhereUniqueWithoutPostsInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupUpdateManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [ProjectGroupCreateWithoutPostsInput], {
    nullable: true
  })
  create?: ProjectGroupCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: ProjectGroupCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupUpsertWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  upsert?: ProjectGroupUpsertWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupCreateManyPostsInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectGroupCreateManyPostsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true
  })
  update?: ProjectGroupUpdateWithWhereUniqueWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupUpdateManyWithWhereWithoutPostsInput], {
    nullable: true
  })
  updateMany?: ProjectGroupUpdateManyWithWhereWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectGroupScalarWhereInput[] | undefined;
}
