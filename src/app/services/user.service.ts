import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class UserService {
    constructor(
        private authService: AuthService
    ) { }

    getUserName() {
        return this.authService.getUserDetailFromLocalStore.userName;
    }

    getUserEmail() {
        return this.authService.getUserDetailFromLocalStore.email;
    }

    getUserId() {
        return this.authService.getUserDetailFromLocalStore.userId;
    }

    getUserFullname() {
        return this.authService.getUserDetailFromLocalStore.fullName;
    }

    getUserProfileImage() {
        return this.authService.getUserDetailFromLocalStore;
    }

    getUserData() {
        return this.authService.getUserDetailFromLocalStore;
    }

}
