import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import User from "./User.entity";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@ObjectType()
@Entity("projects")
export default class Project extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => User)
  @ManyToOne(() => User)
  owner: User;

  @Field({ nullable: true })
  @Column({ nullable: true })
  logoUrl: string;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.likedProjects)
  likers: User[];

  @Field(() => [User])
  @JoinTable()
  @ManyToMany(() => User, (user) => user.projects)
  collaborators: User[];

  @Field(() => Int)
  @Column("bigint", { unique: true })
  githubId: number;
}
