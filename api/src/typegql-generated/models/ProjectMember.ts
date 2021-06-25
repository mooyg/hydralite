import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { ProjectMemberPermissions } from "../models/ProjectMemberPermissions";
import { ProjectRole } from "../models/ProjectRole";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectMember {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  roles?: ProjectRole[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  awaitingApproval!: boolean;

  overallPermissions?: ProjectMemberPermissions | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectMemberPermissionsId?: string | null;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
