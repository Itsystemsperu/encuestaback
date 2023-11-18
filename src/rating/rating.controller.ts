// src/rating/rating.controller.ts

import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Rating } from './rating.entity';
import { RatingService } from './rating.service';

@Controller('rating')
@ApiTags('valoraciones')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las Valoraciones', description: 'Obtiene la lista de valoraciones' })
  @ApiResponse({ status: 200, description: 'Lista de valoraciones', type: Rating, isArray: true })
  async findAll(): Promise<Rating[]> {
    return this.ratingService.findAll();
  }

  @Get('/findById')
  @ApiOperation({ summary: 'Obtener una Valoración por ID' })
  @ApiQuery({ name: 'id', description: 'ID de la valoración', type: 'number' })
  @ApiResponse({ status: 200, description: 'Valoración encontrada', type: Rating })
  @ApiResponse({ status: 404, description: 'Valoración no encontrada' })
  async findById(@Query('id') id: number): Promise<Rating> {
    return this.ratingService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear Valoración', description: 'Crea una nueva valoración' })
  @ApiResponse({ status: 201, description: 'Valoración creada exitosamente', type: Rating })
  @ApiResponse({ status: 400, description: 'Parámetros de solicitud incorrectos' })
  async create(@Body() valoracion: Rating): Promise<Rating> {
    return this.ratingService.create(valoracion);
  }
}
