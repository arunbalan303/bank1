import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname=''
  acno=''
  psw=''
  constructor(private ds :DataService,private router:Router,private fb:FormBuilder){
    

  }
  registerForm=this.fb.group({uname:[''],acno:[''],psw:['']})

  register(){
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw
      const result= this.ds.register(acno,uname,psw)

      if(result){
        alert(" registration success")
        this.router.navigateByUrl('')
      }
      else{
        alert("registration failed user already exist")
        this.router.navigateByUrl('')
      }

  }

}
