import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { Employee } from 'src/models/employee';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {


  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this.obtenerEmployees();
    this.obtenerUsers();
  }

  obtenerUsers(){
    this._employeeService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarUser(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this._employeeService.eliminarUser(id).subscribe(data => {
        this.users = [];
        this.obtenerUsers();    
      }, error => {
        console.log(error);
      })
    }    
  }

  eliminarAllUsers(){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this._employeeService.eliminarAllUsers().subscribe(data => {
        this.users = [];
        this.obtenerUsers();    
      }, error => {
        console.log(error);
      })
    }    
  }

  agregarUser(){
    this._employeeService.añadirUser(this.model).subscribe(data => {
      this.users = [];
      this.obtenerUsers();
      this.model = {_id:'',name:'',surname:'',email:'',password:0};  
    }, error => {
      console.log(error);
    })
  }

  editarUser(id:any){
    this._employeeService.actualizarUser(id,this.model2).subscribe(data =>{
      this.model2 = {_id:'',name:'',surname:'',email:'',password:0};
      this.hideUpdate = true;
      this.users = [];
      this.obtenerUsers();
    }, error => {
      console.log(error);
    })
  }

  // obtenerEmployees(){
  //   this._employeeService.getEmployees().subscribe(data => {
  //     console.log(data);
  //     this.employees = data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  // eliminarEmployee(id:string){
  //   var answer = confirm('Estas seguro de querer eliminarlo?');
  //   if(answer){
  //     this._employeeService.eliminarEmployee(id).subscribe(data => {
  //       this.employees = [];
  //       this.obtenerEmployees();    
  //     }, error => {
  //       console.log(error);
  //     })
  //   }    
  // }

  // eliminarAllEmployees(){
  //   var answer = confirm('Estas seguro de querer eliminarlo?');
  //   if(answer){
  //     this._employeeService.eliminarAllEmployees().subscribe(data => {
  //       this.employees = [];
  //       this.obtenerEmployees();    
  //     }, error => {
  //       console.log(error);
  //     })
  //   }    
  // }

  // agregarEmployee(){
  //   this._employeeService.añadirEmployee(this.model).subscribe(data => {
  //     this.employees = [];
  //     this.obtenerEmployees();
  //     this.model = {_id:'',name:'',position:'',office:'',salary:0};  
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  // editarEmployee(id:string){
  //   this._employeeService.actualizarEmployee(id,this.model2).subscribe(data =>{
  //     this.model2 = {_id:'',name:'',position:'',office:'',salary:0};
  //     this.hideUpdate = true;
  //     this.employees = [];
  //     this.obtenerEmployees();
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  title:string = 'Angular CRUD';  

  users: User [] = [];

  model:User = {_id:'',name:'',surname:'',email:'',password:0};
  model2:User = {_id:'',name:'',surname:'',email:'',password:0};

  // employees: Employee [] = [];

  // model:Employee = {_id:'',name:'',position:'',office:'',salary:0};
  // model2:Employee = {_id:'',name:'',position:'',office:'',salary:0};
  msg:string = '';
  hideUpdate:boolean = true;

  myValue = 0;
  // editUser(i:number):void{
  //     this.hideUpdate = false;
  //     this.model2._id = this.users[i]._id;
  //     this.model2.name = this.users[i].name;
  //     this.model2.surname = this.users[i].surname;
  //     this.model2.email = this.users[i].email;
  //     this.model2.password = this.users[i].password;
  //     this.myValue = i;
  //   }

  // editEmployee(i:number):void{
  //   this.hideUpdate = false;
  //   this.model2._id = this.employees[i]._id;
  //   this.model2.name = this.employees[i].name;
  //   this.model2.position = this.employees[i].position;
  //   this.model2.office = this.employees[i].office;
  //   this.myValue = i;
  // }
  
  closeAlert():void{
    this.msg = '';
  }

}
