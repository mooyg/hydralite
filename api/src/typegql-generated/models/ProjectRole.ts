import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { ProjectMember } from "../models/ProjectMember";
import { ProjectMemberPermissions } from "../models/ProjectMemberPermissions";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectRole {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  linkedOpenEndedTasks!: string[];

  assignedMembers?: ProjectMember[];

  permissions?: ProjectMemberPermissions;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  permissionsId!: string;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;
}
