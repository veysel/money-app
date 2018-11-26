import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../Storage/Services/storage.service';

@Injectable()
export class AuthCanActivate implements CanActivate {

    constructor(
        private _router: Router,
        private _storageService: StorageService,
    ) { }

    canActivate() {
        if (this._storageService.CheckStorage())
            return true;
        else
            this._router.navigate(["/login"]);
    }
}