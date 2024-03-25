import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/prisma.service';
import { ExerciseDto } from './dto/ExerciseDto';
import { MuscleDto } from './dto/MuscleDto';

@Injectable()
export class ExerciseRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async getExercises() {
    try {
      const exercises = await this.prisma.exercise.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          gif_url: true,
          muscle: {
            select: {
              name: true,
            },
          },
        },
      });

      return exercises;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }

  async createExercise({
    description,
    gif_url,
    muscleId,
    name,
  }: ExerciseDto): Promise<ExerciseDto> {
    try {
      const exercise = await this.prisma.exercise.create({
        data: {
          description,
          gif_url,
          name,
          muscleId,
        },
      });
      return exercise;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }
  async searchExercise(name: string): Promise<ExerciseDto> {
    try {
      const exercise = await this.prisma.exercise.findFirst({
        where: {
          name,
        },
      });

      return exercise;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }

  async createMuscle(name: string, picture_url: string): Promise<MuscleDto> {
    try {
      const muscle = await this.prisma.muscle.create({
        data: {
          name,
          picture_url: picture_url ?? '',
        },
      });

      return muscle;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }
  async searchMuscle(name: string): Promise<MuscleDto> {
    try {
      const muscle = await this.prisma.muscle.findFirst({
        where: {
          name,
        },
      });

      return muscle;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }

  async getMuscles() {
    try {
      const muscles = await this.prisma.muscle.findMany();

      return muscles;
    } catch (error) {
      PrismaService.handleError(error);
    }
  }
}