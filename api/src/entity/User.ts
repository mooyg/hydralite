import { BaseEntity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Project } from "./Project";
import UserProfile from "./UserProfile";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  githubId: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  @Column()
  marketingCredits: number;

  @Column("text", { nullable: true })
  elonicMemberId: string;

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];
}
