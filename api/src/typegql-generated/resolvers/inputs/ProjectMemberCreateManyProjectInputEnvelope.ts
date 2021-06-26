import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectMemberCreateManyProjectInput } from "../inputs/ProjectMemberCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectMemberCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectMemberCreateManyProjectInput], {
    nullable: false
  })
  data!: ProjectMemberCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
