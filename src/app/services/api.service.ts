import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable()

export class ApiService {
    baseUrl: string;

    constructor(private authService: AuthService, private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    private getEndPoint(endPoint: string): string {
        return this.baseUrl + endPoint;
    }

    getEmployeesList(): Observable<any> {
        return this.http.get(this.getEndPoint('employees'));
    }

    getEmployeeById(id: Number): Observable<any> {
        return this.http.get(this.getEndPoint(`employees/${id}`));
    }

    craeteEmployee(payload: any): Observable<any> {
        return this.http.post(this.getEndPoint('create'), payload);
    }

    updateEmployeeDetails(payload: any, id: number): Observable<any> {
        return this.http.put(this.getEndPoint(`update/${id}`), payload);
    }

    deleteEmployee(id: number): Observable<any> {
        return this.http.delete(this.getEndPoint(`delete/${id}`));
    }

}