import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column('varchar')
  email = '';
  
  @Column('varchar')
  password = '';
}
