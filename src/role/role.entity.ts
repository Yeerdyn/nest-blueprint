import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  caption: string;
  @Column('text')
  description: string;
}
