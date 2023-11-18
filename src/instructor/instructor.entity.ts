import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Instructor {
  
  @ApiProperty({ example: 1, description: 'Identificador único del instructor' })
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  
  @ApiProperty({ example: 'John Doe', description: 'Nombre del instructor' })
  @Column()
  name: string;
}
