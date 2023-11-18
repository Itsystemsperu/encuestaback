import { Get, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Crear nueva encuesta' })
  @ApiResponse({ status: 201, description: 'Encuesta creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Parámetros de solicitud incorrectos' })
  async create(survey: Survey): Promise<Survey> {
    return this.surveyRepository.save(survey);
  }
  
  @Get()
  @ApiOperation({ summary: 'Obtener todas las encuestas' })
  @ApiResponse({ status: 200, description: 'Lista de encuestas' })
  async findAll(): Promise<Survey[]> {
    return this.surveyRepository.find();
  }

  @ApiOperation({ summary: 'Obtener una encuesta por ID' })
  @ApiResponse({ status: 200, description: 'Encuesta encontrada' })
  @ApiResponse({ status: 404, description: 'Encuesta no encontrada' })
  async findById(id: number): Promise<Survey> {
    const survey = await this.surveyRepository.findOne({ where: { id } });
    if (!survey) {
      throw new NotFoundException('Encuesta no encontrada');
    }
    return survey;
  }
}
