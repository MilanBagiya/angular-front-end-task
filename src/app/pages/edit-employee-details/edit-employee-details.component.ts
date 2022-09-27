import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.scss']
})
export class EditEmployeeDetailsComponent implements OnInit {

  userList
    : any;

  subs: Subscription;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private statusService: StatusService,
    private router: Router) {

    this.subs = new Subscription();
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: [, [Validators.required]],
      age: [, [Validators.required]],
      email: [''],
      country: [''],
      avatar: [''],
    });
  }

  ngOnInit(): void {
  }


  saveUserDetails() {
    let staticId = 1;
    if (this.userForm.valid) {
      this.subs.add(this.apiService.updateEmployeeDetails(this.userForm.value, staticId).subscribe((response: any) => {
        if (response.message) {
          this.statusService.suceessStatus(response.message);
          this.router.navigateByUrl('/');
        }
        else {
          this.statusService.warningStatus(response.message ? response.message : 'Craete user failed');
        }
      })
      )
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
