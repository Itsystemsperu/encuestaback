import { Module, OnModuleInit } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Instructor])],
  providers: [InstructorService],
  controllers: [InstructorController]
})
export class InstructorModule implements OnModuleInit {
  constructor(private readonly instructorService: InstructorService) {}
  onModuleInit() {
      this.instructorService.initializeDatabases();
  }
}
