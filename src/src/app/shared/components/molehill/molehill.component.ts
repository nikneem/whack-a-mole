import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../state/app.state';
import { GameActions } from '../../../state/game/game.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wam-molehill',
  templateUrl: './molehill.component.html',
  styleUrl: './molehill.component.scss',
  animations: [
    trigger('molehillAnimation', [
      state('down', style({ top: '300px' })),
      state('up', style({ top: '0px' })),
      transition('down => up', [animate('0.3s')]),
      transition('up => down', [animate('1s')]),
    ]),
  ],
})
export class MolehillComponent implements OnInit {
  isPlaying: boolean = false;
  isClickable: boolean = false;
  timeShown: number = 0;
  timeElapsed: number = 0;
  hillClass: string = this.getRandomHillImage();
  dirtClass: string = this.getRandomDirtImage();

  private state?: Subscription;

  constructor(private store: Store<IAppState>) {}

  public moleClicked(): void {
    if (this.isClickable && this.isPlaying) {
      this.isClickable = false;
      this.timeElapsed = Date.now() - this.timeShown;
      this.store.dispatch(GameActions.addScore({ score: this.timeElapsed }));
      this.scheduleRandomMoleAppearance();
    }
  }

  public showMole(): void {
    if (this.isPlaying) {
      this.isClickable = true;
      this.timeShown = Date.now();
    } else {
      this.isClickable = false;
    }
  }

  private scheduleRandomMoleAppearance(): void {
    if (this.isPlaying) {
      var randomAppearance = Math.floor(Math.random() * 5000) + 1000;
      setTimeout(() => {
        this.showMole();
      }, randomAppearance);
    }
  }

  public getRandomHillImage(): string {
    var randomImage = Math.floor(Math.random() * 2) + 1;
    return `hill hill-0${randomImage}`;
  }

  public getRandomDirtImage(): string {
    var randomImage = Math.floor(Math.random() * 2) + 1;
    return `dirt dirt-0${randomImage}`;
  }

  public ngOnInit(): void {
    this.state = this.store
      .select((state) => state.gameState)
      .subscribe((state) => {
        if (state.isPlaying != this.isPlaying) {
          this.isPlaying = state.isPlaying;
          if (this.isPlaying) {
            this.scheduleRandomMoleAppearance();
          } else {
            this.isClickable = false;
          }
        }
      });
  }
}
