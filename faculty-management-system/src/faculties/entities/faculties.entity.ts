import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculties 
{
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
  })
  Id: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  Name: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  Expertise: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  noOfPublications: string;
}