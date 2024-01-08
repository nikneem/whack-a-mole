import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../state/app.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wam-main-template',
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.scss',
})
export class MainTemplateComponent implements OnInit, OnDestroy {
  private userInformationSubsctiption?: Subscription;
  userLockedOut: boolean = false;
  lockoutReason: string = 'users.exclusionreasons.generalsystemmisuse';

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.userInformationSubsctiption = this.store
      .select((app) => app.userState)
      .subscribe((user) => {
        console.log(user);
      });
  }

  ngOnDestroy(): void {
    if (this.userInformationSubsctiption) {
      this.userInformationSubsctiption.unsubscribe();
    }
  }
}
