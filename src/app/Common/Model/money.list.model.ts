import { MoneyModel } from "./money.model";

export class MoneyListModel {
    list: Array<MoneyModel>;

    constructor() {
        this.list = new Array<MoneyModel>();
    }
}