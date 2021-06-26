import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRoleCreateManyProjectInput } from "../inputs/ProjectRoleCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectRoleCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectRoleCreateManyProjectInput], {
    nullable: false
  })
  data!: ProjectRoleCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
