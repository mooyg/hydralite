import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@ObjectType()
@Entity({ tableName: "profiles" })
export default class UserProfile {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  avatarUrl: string;

  @Field()
  @Property()
  bio: string;

  // TASK: Add followers and following
}
