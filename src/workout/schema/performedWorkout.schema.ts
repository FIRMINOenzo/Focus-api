import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { WorkOutItem } from '../dto';

export class PerformedWorkout {
  @Prop({
    type: String,
  })
  id: string;

  @Prop({
    type: String,
  })
  userId: string;

  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: Date,
  })
  date: Date;

  @Prop({
    type: Array<WorkOutItem>,
  })
  exercises: Array<WorkOutItem>;
}

export const performedWorkoutSchema =
  SchemaFactory.createForClass(PerformedWorkout);
