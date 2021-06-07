import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("userProfiles")
export default class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avatarUrl: string;

  @Column()
  bio: string;
}
