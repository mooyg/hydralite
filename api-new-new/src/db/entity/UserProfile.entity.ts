import { Field, ID, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("profiles")
export default class UserProfile extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  avatarUrl: string;

  @Field()
  @Column()
  bio: string;

  // TASK: Add followers and following
}
