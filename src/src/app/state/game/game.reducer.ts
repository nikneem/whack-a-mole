import { createReducer, on } from '@ngrx/store';
import { IGameState, initialGameState } from './game.state';
import { GameActions } from './game.actions';

export const gameReducer = createReducer(
  initialGameState,
  on(GameActions.start, (state) => ({
    ...state,
    score: 0,
    timeStarted: Date.now(),
    times: [],
    isPlaying: true,
    isGameOver: false,
  })),
  on(GameActions.stop, (state) => ({
    ...state,
    isPlaying: false,
    isGameOver: true,
  })),
  on(GameActions.addScore, (state, { score }) => addScoreHandler(state, score))
);

function addScoreHandler(state: IGameState, score: number): IGameState {
  const copyState: IGameState = Object.assign({}, state);

  let scores = [...copyState.times];
  scores.push(score);
  const sum = scores.reduce((a, b) => a + b, 0);
  if (copyState.isPlaying) {
    copyState.times = scores;
    copyState.score = sum / scores.length || 0;
  }
  return copyState;
}
