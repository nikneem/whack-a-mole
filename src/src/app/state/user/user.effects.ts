import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './user.actions';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.register),
      exhaustMap((act) =>
        this.usersService.createUser(act.dto).pipe(
          map((dto) => UserActions.registered({ dto: dto })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  resolveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.resolve),
      exhaustMap((act) =>
        this.usersService.resolveUser(act.id).pipe(
          map((dto) => UserActions.resolved({ dto: dto })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
