import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Survey {
  @ApiProperty({ example: 1, description: 'Identificador único de la encuesta' })
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @ApiProperty({ example: 'Johnny Cusi', description: 'Nombre del Instructor' })
  @Column()
  NombreInstructor: string;

  @ApiProperty({ example: '4', description: 'Evaluación sobre el manejo del contenido del curso' })
  @Column()
  ManejaContenidoCurso: string;

  @ApiProperty({ example: '5', description: 'Evaluación sobre el uso de gráficos e ilustraciones' })
  @Column()
  UsaGraficosIlustraciones: string;

  @ApiProperty({ example: '3', description: 'Evaluación sobre despertar interés y metodología de enseñanza' })
  @Column()
  DespiertaInteresMetodologia: string;

  @ApiProperty({ example: '4', description: 'Evaluación sobre disposición para aclarar dudas' })
  @Column()
  BuenaDisposicionAclararDudas: string;

  @ApiProperty({ example: '5', description: 'Evaluación sobre el manejo de la terminología SAP' })
  @Column()
  BuenManejoTerminologiaSAP: string;

  @ApiProperty({ example: '4', description: 'Evaluación sobre el ritmo de las clases' })
  @Column()
  RitmoClasesAdecuado: string;

  @ApiProperty({ example: '5', description: 'Calificación del servicio, conexión, presentación, diapositivas, acceso a SAP' })
  @Column()
  CalificacionServicio: string;

  @ApiProperty({ example: '4', description: 'Evaluación comercial del trato recibido' })
  @Column()
  Comercial: string;

  @ApiProperty({ example: '3', description: 'Evaluación académica del trato recibido' })
  @Column()
  Academico: string;

  @ApiProperty({ example: '5', description: 'Evaluación de soporte recibido' })
  @Column()
  Soporte: string;

  @ApiProperty({ example: 'Sí', description: 'Respuesta a si recomendaría ITSYSTEMS' })
  @Column()
  RecomendariaITSYSTEMS: string;

  @ApiProperty({ example: 'Sí', description: 'Respuesta a si le gustaría tomar otro curso' })
  @Column()
  LeGustariaTomarOtroCurso: string;

  @ApiProperty({ example: 'Desarrollo Web', description: 'Curso que le gustaría tomar si la respuesta es Sí' })
  @Column()
  OtroCurso: string;

  @ApiProperty({ example: 'Buen trabajo', description: 'Observaciones adicionales' })
  @Column()
  OtraObservacion: string;
}
