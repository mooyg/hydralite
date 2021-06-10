import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import UserProfile from "./UserProfile.entity";

@ObjectType()
@Entity("oauthConnections")
export default class OauthConnection extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  oauthService: "github" | "twitter" | "discord" | "google" | "facebook";

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  isPrimary?: boolean;

  @Field(() => [UserProfile])
  @ManyToMany(() => UserProfile)
  users: UserProfile[];
}
