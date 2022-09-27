
import { Injectable } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Injectable()

export class StatusService {

    constructor(
        private primengConfig: PrimeNGConfig,
        private messageService: MessageService) {
        this.primengConfig.ripple = true;
    }

    suceessStatus(message: string) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
    }

    warningStatus(message: string) {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: message });
    }

    infoStatus(message: string) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: message });

    }

    errorStatus(message: string) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }

}
