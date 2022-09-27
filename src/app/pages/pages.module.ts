import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CraeteEmployeeComponent } from './craete-employee/craete-employee.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        EmployeeListComponent,
        EditEmployeeDetailsComponent,
        CraeteEmployeeComponent
    ]
})
export class PagesModule { }
