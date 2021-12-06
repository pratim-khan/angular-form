import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { idropdown } from './dropdown';
import { Observable } from 'rxjs';
import { iradio } from './radio';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }

  // public url="http://localhost:7071/api/apiPost";
  public url="http://localhost:7072/api/apiDemo";
  public urlDrop="http://localhost:7071/api/dropdownGet";
  public urlRadio="http://localhost:7071/api/radioGet";
  public urlStudent="http://localhost:7071/api/apiGet"
   
  enroll(userdata:any){
    return this.http.post<any>(this.url,userdata) 
    
  }

  getStudent(params:any){
    return this.http.get(this.urlStudent,{params})

  }

  getdropdown():Observable<idropdown>{
    return this.http.get<idropdown>(this.urlDrop)
  } 

  getRadio():Observable<iradio>{
    return this.http.get<iradio>(this.urlRadio)
  }
  getpatchvalue(){
    return   {
      "_id": "614d6e64d2ae5e6801f88dd7",
      "firstname": "pratim",
      "lastname": "khan",
      "email": "avc@ffg",
      "phone": "1234567890",
      "roll": 1,
      "clAss": "ten",
      "vagetarian": "true",
      "hobby": ""
    }
  }
}
