import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as argon2 from 'argon2';
import { IsEmail } from "class-validator";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;
  
    @Column()
    lastname: string;

    @Column()
    @IsEmail()
    email: string;
  
    @Column({default: ''})
    bio: string;
  
    @Column({default: ''})
    image: string;
  
    @Column()
    password: string;

    @Column({ type: 'boolean', default: true })
    active: boolean;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await argon2.hash(this.password);
    }
}
