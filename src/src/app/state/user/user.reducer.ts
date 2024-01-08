import { createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.state';
import { UserActions } from './user.actions';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.resolve, (state) => ({
    ...state,
    isLoading: true,
    displayName: undefined,
    emailAddress: undefined,
    isExcluded: false,
    exclusionReason: undefined,
  })),
  on(UserActions.resolved, (state, { dto }) => ({
    ...state,
    isLoading: false,
    id: dto.id,
    displayName: dto.displayName,
    emailAddress: dto.emailAddress,
    isExcluded: dto.isExcluded,
    exclusionReason: dto.exclusionReason,
  })),
  on(UserActions.register, (state, { dto }) => ({
    ...state,
    isLoading: true,
    displayName: dto.displayName,
  })),
  on(UserActions.registered, (state, { dto }) => ({
    ...state,
    isLoading: false,
    id: dto.id,
    displayName: dto.displayName,
    emailAddress: dto.emailAddress,
    isExcluded: dto.isExcluded,
    exclusionReason: dto.exclusionReason,
  }))
);
