// src/rating/rating.module.ts

import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './rating.entity';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule implements OnModuleInit{
  constructor(private readonly ratingService: RatingService) {}

  onModuleInit() {
    this.ratingService.initializeDatabase();
  }
}
