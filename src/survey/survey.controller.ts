import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Survey } from './survey.entity';
import { SurveyService } from './survey.service';

@Controller('survey')
@ApiTags('Encuestas') // Agrega este decorador para establecer un tag específico para Swagger
export class SurveyController {
    constructor(private readonly surveyService: SurveyService) {}

    @Post()
    @ApiOperation({ summary: 'Crear Encuesta', description: 'Crea una nueva encuesta' })
    @ApiResponse({ status: 201, description: 'Encuesta creada exitosamente', type: Survey })
    async create(@Body() encuesta: Survey): Promise<Survey> {
      return this.surveyService.create(encuesta);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener Todas las Encuestas', description: 'Obtiene todas las encuestas' })
    @ApiResponse({ status: 200, description: 'Lista de encuestas', type: [Survey] })
    async findAll(): Promise<Survey[]> {
      return this.surveyService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener Encuesta por ID', description: 'Obtiene una encuesta por su ID' })
    @ApiResponse({ status: 200, description: 'Encuesta encontrada', type: Survey })
    @ApiResponse({ status: 404, description: 'Encuesta no encontrada' })
    async findById(@Param('id') id: number): Promise<Survey> {
      return this.surveyService.findById(id);
    }
}
