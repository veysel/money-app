import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MoneyModel } from '../Model/money.model';

@Injectable()
export class MoneyService {
    private StaticUrl = "https://api.myjson.com/bins";
    private StaticMoneyList: Array<MoneyModel>;

    constructor(
        private _http: HttpClient
    ) {
        this.InitStandartMoneyList();
    }

    public InitStandartMoneyList(): void {
        this.StaticMoneyList = new Array<MoneyModel>();

        this.StaticMoneyList.push({ id: 1, name: "1 Kuruş", value: 0.01, count: 0 });
        this.StaticMoneyList.push({ id: 2, name: "5 Kuruş", value: 0.05, count: 0 });
        this.StaticMoneyList.push({ id: 3, name: "10 Kuruş", value: 0.10, count: 0 });
        this.StaticMoneyList.push({ id: 4, name: "25 Kuruş", value: 0.25, count: 0 });
        this.StaticMoneyList.push({ id: 5, name: "50 Kuruş", value: 0.50, count: 0 });
        this.StaticMoneyList.push({ id: 6, name: "1 TL", value: 1, count: 0 });
    }

    public createCode() {
        return this._http.post(this.StaticUrl, this.StaticMoneyList);
    }

    public getData(code: string) {
        return this._http.get(this.StaticUrl + "/" + code);
    }
}