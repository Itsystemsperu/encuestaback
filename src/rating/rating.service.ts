// src/rating/rating.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './rating.entity';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
  ) {}

  @ApiOperation({ summary: 'Crear nueva valoración' })
  @ApiResponse({ status: 201, description: 'Valoración creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Parámetros de solicitud incorrectos' })
  async create(rating: Rating): Promise<Rating> {
    return this.ratingRepository.save(rating);
  }

  @ApiOperation({ summary: 'Obtener todas las valoraciones' })
  @ApiResponse({ status: 200, description: 'Lista de valoraciones', type: Rating, isArray: true })
  async findAll(): Promise<Rating[]> {
    return this.ratingRepository.find();
  }

  @ApiOperation({ summary: 'Obtener una valoración por ID' })
  @ApiResponse({ status: 200, description: 'Valoración encontrada', type: Rating })
  @ApiResponse({ status: 404, description: 'Valoración no encontrada' })
  async findById(id: number): Promise<Rating> {
    const rating = await this.ratingRepository.findOne({where:{id}});
    if (!rating) {
      throw new NotFoundException('Valoración no encontrada');
    }
    return rating;
  }
  
  // Método para inicializar la base de datos con los valores deseados
  async initializeDatabase(): Promise<void> {
    const ratingValues = ['Totalmente En DESACUERDO', 'En DESACUERDO', 'Ni De Acuerdo Ni En Desacuerdo', 'De ACUERDO', 'Totalmente De ACUERDO'];
    console.log('Initializing database with values:', ratingValues);

    for (const value of ratingValues) {
        console.log('Processing value:', value);

      const existingRating = await this.ratingRepository.findOne({ where: { nombre: value } });
      console.log('Inserted value:', value);
      if (!existingRating) {
        const newRating = new Rating();
        newRating.nombre = value;
        await this.ratingRepository.save(newRating);
      } else{
        console.log('Value already exists:', value);
      }
    }
  }
}  
