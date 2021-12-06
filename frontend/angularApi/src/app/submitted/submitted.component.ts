import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  public patchvalue:any=[]
  constructor(private router:Router , private serverservice: ServerService) { }

  ngOnInit(): void {
   this.patchvalue= this.serverservice.getpatchvalue()
  }

  onpatchclick(){
    let selectedRoll = this.patchvalue.roll
    console.log(this.patchvalue.roll)
    this.router.navigate(['/form'],{queryParams:{roll:selectedRoll}})

  }

}
