import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import OauthConnection from "./OauthConnection.entity";
import User from "./User.entity";

@ObjectType()
@Entity("userProfiles")
export default class UserProfile extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User)
  @OneToOne(() => User)
  owner: User;

  @Field()
  @Column()
  avatarUrl: string;

  @Field()
  @Column()
  bio: string;

  @Field(() => [OauthConnection])
  @JoinTable()
  @ManyToMany(() => OauthConnection)
  connections: OauthConnection[];

  // TASK: Add followers and following
}
