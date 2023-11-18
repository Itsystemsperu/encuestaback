import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingModule } from './rating/rating.module';
import { InstructorModule } from './instructor/instructor.module';
import databaseConfig from './config/database.config';
import { ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseConfig),
    SurveyModule,
    RatingModule,
    InstructorModule,
  ],
})
export class AppModule {
constructor() {
    console.log('Database Config:', databaseConfig);
  }
}
  