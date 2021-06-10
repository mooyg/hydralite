import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import OauthConnection from "./OauthConnection.entity";

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  githubUsername: string;

  @Field(() => [OauthConnection])
  @JoinTable()
  @ManyToMany(() => OauthConnection)
  connections: OauthConnection[];

  // TASK: Add followers and following
}
