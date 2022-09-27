import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorePath } from '../models/common.model';
import { DEFAULT_AUTHORIZATION_ERROR_MESSAGE, DEFAULT_ERROR_MESSAGE } from '../models/message.model';
import { StatusService } from '../services/status.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private statusService: StatusService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken = localStorage.getItem(LocalStorePath.accessToken);
        if (accessToken) {
            const clonedRequest = request.clone({
                headers: request.headers
                    .set('Authorization', 'Bearer ' + accessToken)
            });

            return next.handle(clonedRequest).pipe(
                tap((success: any) => {
                    if (success.Status === false) {
                        console.error(success.Message);
                    }
                }, (error: any) => {
                    if (error.status === 401 || error.status === 403) {
                        localStorage.clear();
                        this.router.navigate(['/']);
                        this.statusService.errorStatus(DEFAULT_AUTHORIZATION_ERROR_MESSAGE);
                    } else {
                        this.statusService.errorStatus(error.error?.message || DEFAULT_ERROR_MESSAGE);
                    }
                }));
        } else {
            return next.handle(request.clone())
                .pipe(
                    tap((success: any) => {
                        if (success.Status === false) {
                            console.error(success.Message);
                        }
                    }, (error: any) => {
                        if (error.status === 401 || error.status === 403) {
                            localStorage.clear();
                            this.router.navigate(['/']);
                            this.statusService.errorStatus(DEFAULT_AUTHORIZATION_ERROR_MESSAGE);
                        } else {
                            this.statusService.errorStatus(error.error?.message || DEFAULT_ERROR_MESSAGE);
                        }
                    }));
        }
    }
}
