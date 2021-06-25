import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PostGroup } from "../models/PostGroup";
import { ProjectMember } from "../models/ProjectMember";
import { ProjectRole } from "../models/ProjectRole";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Project {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logoUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bannerUrl!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  newJoineesRequireApproval!: boolean;

  owner?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  members?: ProjectMember[];

  likers?: User[];

  followers?: User[];

  roles?: ProjectRole[];

  postGroups?: PostGroup[];
}
