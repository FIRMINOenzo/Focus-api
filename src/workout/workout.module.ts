import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { WorkoutRepository } from './workout.repository';
import { PrismaModule } from 'src/shared/db/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { performedWorkoutSchema } from './schema/performedWorkout.schema';
import { MongoWorkoutRepository } from './workout.mongo.repository';

@Module({
  imports: [
    PrismaModule,
    MongooseModule.forFeature([
      { name: 'Workout', schema: performedWorkoutSchema },
    ]),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService, WorkoutRepository, MongoWorkoutRepository],
})
export class WorkoutModule {}
