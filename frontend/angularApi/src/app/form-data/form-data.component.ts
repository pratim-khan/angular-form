import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  get firstname() {
    return this.registrationform.get('firstname')
  }
  get lastname() {
    return this.registrationform.get('lastname')
  }
  get email() {
    return this.registrationform.get('email')
  }
  get phone() {
    return this.registrationform.get('phone')
  }
  get roll() {
    return this.registrationform.get('roll')
  }
  get clAss() {
    return this.registrationform.get('clAss')
  }
  get vagetarian() {
    return this.registrationform.get('vagetarian')
  }
  get hobby() {
    return this.registrationform.get('hobby')
  }

  constructor(private serverService : ServerService , private router:Router , private route:ActivatedRoute){}

  registrationform = new FormGroup ({
    image: new FormControl(''),
    firstname: new FormControl('', [Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    roll : new FormControl('',[Validators.required]),
    clAss : new FormControl('',[Validators.required]),
    vagetarian: new FormControl(''),
    hobby: new FormControl(''),

  })

  onsubmit() {
    this.serverService.enroll(this.registrationform.value)
    .subscribe(data=>(alert('sucess !! you succesfully save your data'),data),
              error=>console.error('error',error));
     this.router.navigate(['/submitted'])
    
  }
    
  
  
  public dropdown:any =[];
  public veg:any =[];
  public patchdata:any;
  public Roll:any;


  ngOnInit(): void {
    this.serverService.getdropdown().subscribe(data => this.dropdown=data);

    this.serverService.getRadio().subscribe(data => this.veg=data);

   this.patchdata = this.serverService.getpatchvalue()

    this.route.queryParams.subscribe((param:any) => {
      if(param['roll']){
            let roll = param['roll'];
            this.Roll=roll
            let params = {roll}
            this.serverService.getStudent(params).subscribe(data => {
              let student=data;
              this.registrationform.patchValue(student)
            }
            )
 
      }
    } )
  }
  public url:any = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => { 
        this.url = event.target?.result
      }
    }
  }
  


}
