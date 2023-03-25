import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

// @Entity('tb_user')
// export class User {
//   // 主键
//   @PrimaryColumn({ type: 'varchar' })
//   username: string;

//   @Column()
//   password: string;

//   @Column()
//   phone?: string;

//   @Column()
//   email?: string;

//   @Column()
//   created: Date;

//   @Column()
//   updated: Date;

//   @Column()
//   source_type?: string;

//   @Column()
//   nickname?: string;

//   @Column()
//   name?: string;

//   @Column()
//   status?: string;

//   @Column()
//   head_pic?: string;

//   @Column()
//   qq?: string;

//   @Column()
//   is_mobile_check?: string;

//   @Column()
//   is_email_check?: string;

//   @Column()
//   sex?: string;

//   @Column()
//   user_level?: number;

//   @Column()
//   points?: number;

//   @Column()
//   experience_valu?: number;

//   @Column()
//   birthday?: Date;

//   @Column()
//   last_login_time?: Date;
// }

@Entity('tb_user')
export class User {
  // 主键
  @PrimaryColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  avatarUrl: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
