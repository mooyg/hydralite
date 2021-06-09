import { Field, ID, ObjectType } from "type-graphql";
import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import User from "./User.entity";

@ObjectType()
@Entity({ tableName: "profiles" })
export default class UserProfile {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Field()
  @Property()
  avatarUrl: string;

  @Field()
  @Property()
  bio: string;

  // TASK: Add followers and following
}
