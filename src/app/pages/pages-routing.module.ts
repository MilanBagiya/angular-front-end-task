import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraeteEmployeeComponent } from './craete-employee/craete-employee.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent, 
    
        children: [{
            path: '',
            pathMatch: 'prefix',
            component: EmployeeListComponent,
        },
        {
            path: 'edit-details',
            component: EditEmployeeDetailsComponent
        }, {
            path: 'create-employee',
            component: CraeteEmployeeComponent
        }]
    
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
