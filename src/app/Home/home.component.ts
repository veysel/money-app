import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoneyService } from '../Common/Service/money.service';
import { StorageService } from '../Storage/Services/storage.service';

import { MoneyModel } from '../Common/Model/money.model';

@Component({
  selector: 'home',
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {

  public code: string = "";
  public totalMoney: number = 0;
  public moneyDataList: Array<MoneyModel>;

  constructor(
    private _moneyService: MoneyService,
    private _storageService: StorageService,
    private _router: Router,
  ) {
    this.moneyDataList = new Array<MoneyModel>();
  }

  ngOnInit() {
    this.code = this._storageService.GetStorage().Code;

    this.GetData();
  }

  public LogoutButtonClick(): void {
    this._storageService.ClearStorage();
    this._router.navigate(["/login"]);
  }

  public GetData() {
    this._moneyService.getData(this.code).subscribe(response => {
      this.moneyDataList = <any>response;

      this.totalMoney = 0;
      this.moneyDataList.forEach(member => {
        this.totalMoney = this.totalMoney + (member.value * member.count);
      });
    });
  }

}
