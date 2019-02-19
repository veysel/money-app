import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MoneyService } from '../Common/Service/money.service';
import { StorageService } from '../Storage/Services/storage.service';

@Component({
  selector: 'home',
  templateUrl: './home.template.html'
})
export class HomeComponent {

  constructor(
    private _moneyService: MoneyService,
    private _storageService: StorageService,
    private _router: Router,
  ) { }

  public LogoutButtonClick(): void {
    this._storageService.ClearStorage();
    this._router.navigate(["/login"]);
  }

}
