import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  subs: Subscription;
  employees: any;

  constructor(private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private statusService: StatusService) {
    this.subs = new Subscription();
  }

  ngOnInit() {
    this.getDetails()
  }

  getDetails() {
    this.subs.add(
      this.apiService.getEmployeesList().subscribe(
        (response) => {
          this.statusService.suceessStatus('Get Details Successfully');
          this.employees = response.data;
        }
      )
    )
  }

  updateEmployee(id: number) {

  }


  deleteEmployee(id: number) {
    this.subs.add(
      this.apiService.deleteEmployee(id).subscribe(
        (response) => {
          alert('Employee Details Deleted Successfully')
          this.statusService.suceessStatus('Employee Details Deleted Successfully');
          this.getDetails();
        }
      )
    )
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
