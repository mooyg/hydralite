import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProjectGroup {
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

  members?: User[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCommunity!: boolean;

  posts?: Post;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;
}
