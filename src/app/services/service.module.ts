import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { MessageService } from "primeng/api";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { StatusService } from "./status.service";
import { UserService } from "./user.service";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ],
    declarations: [

    ],
    providers: [
        ApiService,
        AuthService,
        StatusService,
        UserService,
        MessageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ]
})

export class ServiceModule {
    constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
        if (parentModule) {
            throw new Error(
                'ServiceModule is already loaded. Import it in the AppModule only'
            );
        }
    }

}
