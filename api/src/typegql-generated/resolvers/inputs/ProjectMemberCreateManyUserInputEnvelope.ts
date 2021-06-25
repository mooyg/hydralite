import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyUserInput } from "../inputs/ProjectMemberCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateManyUserInput], {
    nullable: false
  })
  data!: ProjectMemberCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
