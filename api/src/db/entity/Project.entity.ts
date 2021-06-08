import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from "typeorm";
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
  @OneToOne(() => User)
  @JoinColumn()
  owner: User;

  @Field(() => [User])
  @JoinTable()
  @ManyToMany(() => User, (user) => user.projects)
  collaborators: User[];

  @Field(() => Int)
  @Column("bigint", { unique: true })
  githubId: number;
}
