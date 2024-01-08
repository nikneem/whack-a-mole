export interface IGameState {
  score: number;
  timeStarted: number;
  isPlaying: boolean;
  isGameOver: boolean;
  times: number[];
}
export const initialGameState: IGameState = {
  score: 0,
  timeStarted: 0,
  isPlaying: false,
  isGameOver: false,
  times: [],
};
