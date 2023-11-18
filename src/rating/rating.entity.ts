// src/rating/rating.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Rating {
  @ApiProperty({ example: 1, description: 'Identificador único de la valoración' })
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Excelente', description: 'Nombre de la valoración' })
  @Column()
  nombre: string;
}
