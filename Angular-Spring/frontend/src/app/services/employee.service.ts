import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Employee } from '../models/employee';

const baseUrl = 'http://localhost:9191/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }

  getApi(): Observable<any> {
    return this.http.get(baseUrl+'employees', this.options);
  }

  getApiById(id: number): Observable<any> {
    return this.http.get(`${baseUrl}employeeById/${id}`, this.options);
  }

  getApiByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}employeeByName/${name}`, this.options)
  }

  postApi(body = {}): Observable<any> {
    return this.http.post(baseUrl+'addEmp', JSON.stringify(body), this.options)
  }

  putApi(body = {}): Observable<any> {
    return this.http.put(baseUrl+'update',JSON.stringify(body),this.options);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}delete/${id}`, this.options);
  }


  // Cancel the API Calls
  cancelApiCall(destroy$: any) {
    destroy$.next();
    destroy$.complete();
  }


}
