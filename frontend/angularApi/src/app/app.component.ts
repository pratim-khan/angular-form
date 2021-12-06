import { Component } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public links : any=[];
  constructor() { }
  
  ngOnInit(): void {
    // this.employeeservice.getemployeeService().subscribe(data => this.employees=data)
    // this.commonservice.getAllUrl().subscribe(data => this.links=data )
  }

}