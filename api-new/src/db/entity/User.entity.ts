import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";

import Project from "./Project.entity";
import UserProfile from "./UserProfile.entity";

@ObjectType()
@Entity({ tableName: "users" })
export default class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field(() => Int)
  @Property({ unique: true })
  githubId: number;

  @Field()
  @Property({ unique: true })
  username: string;

  @Field(() => String)
  @Property({ unique: true })
  email: string;

  @Field()
  @Property({ type: "date" })
  joinDate: Date = new Date();

  @Field(() => UserProfile)
  @OneToOne(() => UserProfile)
  profile: UserProfile;

  @Field(() => [Project])
  @ManyToMany(() => Project, (project) => project.likers, { owner: true })
  likedProjects: Project[];

  // TASK: Use authorized decorator so only this user can access their marketing credits
  @Field(() => Int)
  @Property({ type: "" })
  marketingCredits: number;

  @Field()
  @Property({ nullable: true, unique: true })
  elonicMemberId?: string;

  @Field(() => [Project], { nullable: true })
  @ManyToMany(() => Project, (project) => project.collaborators, {
    owner: true,
  })
  projects: Project[];
}
