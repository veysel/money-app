import { Component } from '@angular/core';

import { MoneyService } from '../Common/Service/money.service';

@Component({
  selector: 'register',
  templateUrl: './register.template.html'
})
export class RegisterComponent {
  public MainComponent: boolean = true;
  public LoadingComponent: boolean = false;

  public newCodeText: string = "Yeni bir kod oluşturulmamış !";

  public registerState: boolean = false;

  constructor(
    private _moneyService: MoneyService
  ) { }

  public register() {
    this.MainComponent = false;
    this.LoadingComponent = true;
    this.registerState = true;

    this._moneyService.test().subscribe(x => {
      console.log(x);
    });
  }
}
