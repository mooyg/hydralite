import { Field, ObjectType } from "type-graphql";
import { ManyToOne } from "typeorm";
import User from "./User";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@ObjectType({ isAbstract: true })
@Entity("projects")
export class Project {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field((type) => User)
  @ManyToOne(() => User, (user) => user.projects)
  user: User;
}
