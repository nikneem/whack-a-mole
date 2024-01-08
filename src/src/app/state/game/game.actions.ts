import { createActionGroup, props } from '@ngrx/store';

export const GameActions = createActionGroup({
  source: 'Game',
  events: {
    Start: props<{ startTime: number }>(),
    Stop: props<{ endTime: number }>(),
    AddScore: props<{ score: number }>(),
  },
});
