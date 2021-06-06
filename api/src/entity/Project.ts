import { ManyToOne } from "typeorm";
import { User } from "./User";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;
}
