import { Component, OnInit } from '@angular/core';
import {NgForm,FormBuilder ,FormControl ,  FormGroup , NgModel } from '@angular/forms';
import {Router} from '@angular/router';
import {ImsService} from '../ims.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ImsService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router , private ImsService:ImsService , private toast:ToastrService) { }

  ngOnInit() {
  }

  loginSubmit(loginData){
    debugger;
    
    this.ImsService.createLogin(loginData).subscribe(res=>{
      debugger
      if(res['status'] == true){
        this.toast.success("Successfully LogedIn")
        this.router.navigate(['dashboard'])
      }
    })
    
  }

}
