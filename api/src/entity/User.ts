import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Project } from "./Project";
import UserProfile from "./UserProfile";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@ObjectType()
@Entity("users")
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  githubId: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column("timestamptz")
  joinDate: Date;

  @Field((type) => UserProfile)
  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  // TASK: Use authorized decorator so only this user can access their marketing credits
  @Field()
  @Column()
  marketingCredits: number;

  @Field()
  @Column("text", { nullable: true })
  elonicMemberId: string;

  @Field((type) => [Project])
  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];
}
