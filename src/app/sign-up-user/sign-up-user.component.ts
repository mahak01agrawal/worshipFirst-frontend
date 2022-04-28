import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  name:string="";
  email:string="";
  mobile:string="";
  password:string="";
  image:any;
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      this.image = event.target.files[0];
      console.log(this.image);
    }
  }
  confirm_passowrd:string="";
  sendOtp(){
    let formData = new FormData();
    formData.append("name",this.name);
    formData.append("email",this.email);
    formData.append("password",this.password);
    formData.append("mobile",this.mobile);
    formData.append("image",this.image);
    formData.append("password_confirmation",this.confirm_passowrd);
    this.userService.userSignup(formData).subscribe(data=>{
      console.log(data);
      this.router.navigate(["otp-checker",data.result._id]);    
    });
  }


}
