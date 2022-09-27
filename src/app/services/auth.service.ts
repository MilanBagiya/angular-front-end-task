import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorePath } from '../models/common.model';
import { ISignInResponseModel, IUserLoginResponseModal } from '../models/user.model';

@Injectable()

export class AuthService {
    constructor(private router: Router) { }

    setLocalStorage(key: string, value: string): void {
        this.window?.localStorage.setItem(key, value);
    }

    get window() {
        return (typeof window !== "undefined") ? window : null;
    }

    get getUserDetailFromLocalStore(): IUserLoginResponseModal {
        return localStorage.getItem(LocalStorePath.user)
            ? JSON.parse(localStorage.getItem(LocalStorePath.user) || '{}')
            : null;
    }

    getlocalStorageItemByKey(key: string): string | undefined | null {
        return this.window?.localStorage.getItem(key);
    }
}

