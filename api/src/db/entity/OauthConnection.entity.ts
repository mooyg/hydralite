import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import User from "./User.entity";

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

  @Field(() => User)
  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  owner: User;
}
