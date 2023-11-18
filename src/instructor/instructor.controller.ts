import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InstructorService } from './instructor.service';
import { Instructor } from './instructor.entity';


@Controller('instructor')
@ApiTags('Instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Instructores', description: 'Obtiene la lista de valoraciones' })
  @ApiResponse({ status: 200, description: 'Lista de Instructores', type: Instructor, isArray: true })
  async findAll(): Promise<Instructor[]> {
    return this.instructorService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear Instructor', description: 'Crea una nuevo Instructor' })
  @ApiResponse({ status: 201, description: 'Instructor creado exitosamente', type: Instructor })
  @ApiResponse({ status: 400, description: 'Parámetros de solicitud incorrectos' })
  async create(@Body() instructor: Instructor): Promise<Instructor> {
    return this.instructorService.create(instructor);
  }
}
