import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthCanActivate implements CanActivate {

    constructor(
        private _router: Router
    ) { }

    canActivate() {
        let testFlag = true;

        if (testFlag)
            return true;
        else
            this._router.navigate(["/login"]);
    }
}