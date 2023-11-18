import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';
import { Repository } from 'typeorm';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private readonly instructorRepository: Repository<Instructor>,
  ) {}

  @ApiOperation({ summary: 'Crear nuevo Instructor' })
  @ApiResponse({ status: 201, description: 'Instructor creado exitosamente' })
  @ApiResponse({
    status: 400,
    description: 'Parámetros de solicitud incorrectos',
  })
  async create(instructor: Instructor): Promise<Instructor> {
    return this.instructorRepository.save(instructor);
  }
  @ApiOperation({ summary: 'Obtener todos los instructores' })
  @ApiResponse({
    status: 200,
    description: 'Lista de instructores',
    type: Instructor,
    isArray: true,
  })
  async findAll(): Promise<Instructor[]> {
    return this.instructorRepository.find();
  }

  // Método para inicializar la base de datos con los valores deseados
  async initializeDatabases(): Promise<void> {
    const instructorValues = ['Johny Cusi', 'Marco Silva', 'Sulca'];

    for (const value of instructorValues) {
      console.log('Processing value:', value);
      const existingInstructor = await this.instructorRepository.findOne({
        where: { name: value },
      });
      console.log('Inserted value:', value);
      if (!existingInstructor) {
        const newInstructor = new Instructor();
        newInstructor.name = value;
        await this.instructorRepository.save(newInstructor);
      } else {
        console.log('instructor already exists:', value);
      }
    }
  }
}
