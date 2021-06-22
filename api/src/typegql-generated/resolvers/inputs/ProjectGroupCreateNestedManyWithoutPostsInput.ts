import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectGroupCreateManyPostsInputEnvelope } from "../inputs/ProjectGroupCreateManyPostsInputEnvelope";
import { ProjectGroupCreateOrConnectWithoutPostsInput } from "../inputs/ProjectGroupCreateOrConnectWithoutPostsInput";
import { ProjectGroupCreateWithoutPostsInput } from "../inputs/ProjectGroupCreateWithoutPostsInput";
import { ProjectGroupWhereUniqueInput } from "../inputs/ProjectGroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectGroupCreateNestedManyWithoutPostsInput {
  @TypeGraphQL.Field(_type => [ProjectGroupCreateWithoutPostsInput], {
    nullable: true
  })
  create?: ProjectGroupCreateWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupCreateOrConnectWithoutPostsInput], {
    nullable: true
  })
  connectOrCreate?: ProjectGroupCreateOrConnectWithoutPostsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectGroupCreateManyPostsInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectGroupCreateManyPostsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectGroupWhereUniqueInput[] | undefined;
}
