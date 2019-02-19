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

  public GetData(): void {
    this._moneyService.getData(this.code).subscribe(response => {
      this.moneyDataList = <any>response;

      this.totalMoney = 0;
      this.moneyDataList.forEach(member => {
        this.totalMoney = this.totalMoney + (member.value * member.count);
      });
    });
  }

  public AddData(count: number, id: number): void {
    if (count < 1)
      return;

    this.moneyDataList.forEach(member => {
      if (member.id == id) {
        member.count = member.count + Number.parseInt(count.toString());
      }
    });

    this._moneyService.updateCode(this.code, this.moneyDataList).subscribe(response => {
      alert("Güncelleme başarılı");
      this.GetData();
    });
  }

  public RemoveData(count: number, id: number): void {
    if (count < 1)
      return;

    count = Number.parseInt(count.toString());
    this.moneyDataList.forEach(member => {
      if (member.id == id) {
        if (member.count < count) {
          alert("Girdiğiniz miktar fazla !");
          return;
        }
        else {
          member.count = member.count - Number.parseInt(count.toString());

          this._moneyService.updateCode(this.code, this.moneyDataList).subscribe(response => {
            alert("Güncelleme başarılı");
            this.GetData();
          });
        }
      }
    });
  }

}
