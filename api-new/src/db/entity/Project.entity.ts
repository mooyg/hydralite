import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import User from "./User.entity";

@ObjectType()
@Entity({ tableName: "projects" })
export default class Project {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  title: string;

  @Field(() => User)
  @ManyToOne(() => User)
  owner: User;

  @Field({ nullable: true })
  @Property({ nullable: true })
  logoUrl: string;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.likedProjects)
  likers: User[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.projects)
  collaborators: User[];

  @Field(() => Int)
  @Property({ unique: true })
  githubId: number;
}
