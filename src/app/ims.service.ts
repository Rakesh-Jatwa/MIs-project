import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImsService {
  readonly baseUrl = 'http://192.168.100.180:8000';
  constructor( private http:HttpClient ) {  
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');
  }
  

  

  createLogin(loginData){
   
    return this.http.post(`${this.baseUrl}/login`,loginData);
  }

  createOrders(orderData){
    console.log("`${this.baseUrl}/addOrder`",`${this.baseUrl}/addOrder`)
    return this.http.post(`${this.baseUrl}/addOrder`,orderData);
  }
  getAllOrders(){
    return this.http.get(`${this.baseUrl}/allOrders`);
  }

  createArea(AreaData){
    return this.http.post(`${this.baseUrl}/addArea`,AreaData);
  }
  createTimesSlot(timeslot){
    return this.http.post(`${this.baseUrl}/addSlot`,timeslot);
  }
  createInstallationType(installation){
    return this.http.post(`${this.baseUrl}/addInstall`,installation);
  }
  


}

