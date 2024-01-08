import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../state/app.state';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserActions } from '../../../state/user/user.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserCreateDto } from '../../../state/user/user.models';

@Component({
  selector: 'wam-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
})
export class RegistrationPageComponent implements OnInit, OnDestroy {
  private userStateSubscription?: Subscription;
  private userId?: string;
  public isLoading: boolean = false;
  public registrationForm: FormGroup;
  public acceptedCoc: boolean = false;

  constructor(private store: Store<IAppState>, private router: Router) {
    this.registrationForm = new FormGroup({
      displayName: new FormControl('', Validators.required),
      emailAddress: new FormControl(''),
      acceptCoc: new FormControl(false, Validators.requiredTrue),
    });
  }

  private resolveUser() {
    const userId = this.getUserIdFromLocalStorage();
    if (userId) {
      this.store.dispatch(UserActions.resolve({ id: userId }));
    } else {
      console.log('User not found');
    }
  }
  private getUserIdFromLocalStorage(): string | null {
    return localStorage.getItem('wamUserId');
  }
  public register(): void {
    let userDto: IUserCreateDto = this.registrationForm.value;
    this.store.dispatch(UserActions.register({ dto: userDto }));
  }

  ngOnInit(): void {
    this.userStateSubscription = this.store
      .select((app) => app.userState)
      .subscribe((user) => {
        this.isLoading = user.isLoading;
        this.userId = user.id;
        if (this.userId) {
          localStorage.setItem('wamUserId', this.userId);
          this.router.navigateByUrl('/registration/join');
        }
      });
    this.resolveUser();
  }

  ngOnDestroy(): void {
    if (this.userStateSubscription) {
      this.userStateSubscription.unsubscribe();
    }
  }
}
