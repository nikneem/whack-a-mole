import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../state/app.state';
import { GameActions } from '../../../state/game/game.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wam-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  timeAllowed: number = 30000;
  timeLeft: number = 30000;
  timeStarted: number = 0;
  timeElapsed: number = 0;
  moleCount: number = 0;
  score: number = 0;
  isPlaying: boolean = false;

  private gameState?: Subscription;

  constructor(private store: Store<IAppState>) {}

  startGame(): void {
    this.start();
  }

  private start(): void {
    this.timeStarted = Date.now();
    this.store.dispatch(GameActions.start({ startTime: this.timeStarted }));
    this.measure();
  }

  private measure(): void {
    this.timeElapsed = Date.now() - this.timeStarted;
    this.timeLeft = this.timeAllowed - this.timeElapsed;
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.store.dispatch(GameActions.stop({ endTime: Date.now() }));
    }
    if (this.isPlaying) {
      setTimeout(() => {
        this.measure();
      }, 50);
    }
  }

  ngOnInit(): void {
    this.gameState = this.store
      .select((app) => app.gameState)
      .subscribe((game) => {
        this.moleCount = game.times.length;
        this.score = game.score;
        this.isPlaying = game.isPlaying;
      });
  }
}
