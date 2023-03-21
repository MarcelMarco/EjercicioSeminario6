import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Employee } from '../app.component';
import { Employee } from 'src/models/employee';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // url = 'http://localhost:3000/api/employees';

  // constructor(private http: HttpClient) { }

  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.url);
  // }

  // eliminarEmployee(id: String): Observable<any> {
  //   return this.http.delete(this.url + '/' + id);
  // } 

  // eliminarAllEmployees(): Observable<any> {
  //   return this.http.delete(this.url + '/');
  // } 

  // añadirEmployee(employee: Employee): Observable<any>{
  //   return this.http.post(this.url, employee);
  // }

  // actualizarEmployee(id:String, employee: Employee): Observable<any>{
  //   return this.http.put(this.url + '/' + id, employee);
  // }
  url = 'http://localhost:3002/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/all');
  }

  eliminarUser(id: String): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  } 

  eliminarAllUsers(): Observable<any> {
    return this.http.delete(this.url + '/');
  } 

  añadirUser(user: User): Observable<any>{
    return this.http.post(this.url + '/', user);
  }

  actualizarUser(id:String, user: User): Observable<any>{
    return this.http.put(this.url + '/' + id, user);
  }

}
