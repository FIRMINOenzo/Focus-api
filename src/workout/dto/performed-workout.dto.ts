import { IsNotEmpty } from 'class-validator';
import { WorkOutItem } from './create-workout.dto';

export class PerformedWorkoutDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  exercises: Array<WorkOutItem>;
}
