import { createActionGroup, props } from '@ngrx/store';
import { IUserCreateDto, IUserDetailsDto } from './user.models';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    Resolve: props<{ id: string }>(),
    Resolved: props<{ dto: IUserDetailsDto }>(),
    Register: props<{ dto: IUserCreateDto }>(),
    Registered: props<{ dto: IUserDetailsDto }>(),
  },
});
