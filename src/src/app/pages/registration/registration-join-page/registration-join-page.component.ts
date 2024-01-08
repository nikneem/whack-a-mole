import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wam-registration-join-page',
  templateUrl: './registration-join-page.component.html',
  styleUrl: './registration-join-page.component.scss',
})
export class RegistrationJoinPageComponent {
  public isLoading: boolean = false;
  public joinForm: FormGroup;

  public join(): void {}

  public clickScan(): void {
    console.log('clickScan');
  }

  constructor() {
    this.joinForm = new FormGroup({
      gameCode: new FormControl('', Validators.required),
    });
  }
}
