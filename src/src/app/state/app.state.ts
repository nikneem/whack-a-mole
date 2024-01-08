import { gameReducer } from './game/game.reducer';
import { IGameState, initialGameState } from './game/game.state';
import { userReducer } from './user/user.reducer';
import { IUserState, initialUserState } from './user/user.state';

export interface IAppState {
  userState: IUserState;
  gameState: IGameState;
}

export const initialAppState: IAppState = {
  userState: initialUserState,
  gameState: initialGameState,
};

export const reducers = {
  userState: userReducer,
  gameState: gameReducer,
};
