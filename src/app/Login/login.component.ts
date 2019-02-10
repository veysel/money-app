import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MoneyService } from '../Common/Service/money.service';
import { StorageService } from '../Storage/Services/storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.template.html'
})
export class LoginComponent {

  public loginState: boolean = false;

  constructor(
    private _moneyService: MoneyService,
    private _storageService: StorageService,
    private _router: Router,
  ) { }

  public login(inputCode: any): boolean {

    let value: string = inputCode.value;

    if (value.length < 1)
      return false;

    this.loginState = true;
    this._moneyService.getData(value).subscribe(
      data => {
        this.loginState = false;

        this._storageService.SetStorage({ Code: value });
        this._router.navigate(["/home"]);

        console.log(data);
      },
      error => {
        this.loginState = false;

        console.log(error);
      });

    return false;
  }

}
