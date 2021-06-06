import { OneToMany } from "typeorm";
import { Project } from "./Project";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  marketingCredits: number;

  @Column()
  elonicMemberId: string;

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];
}
