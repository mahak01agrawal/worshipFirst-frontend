import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-otp-checker',
  templateUrl: './otp-checker.component.html',
  styleUrls: ['./otp-checker.component.css']
})

export class OtpCheckerComponent implements OnInit {
  id:any;
  otp:string="";
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private userService:UserService) { 
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
  }

  checkOtp(){
    this.userService.signUpByOtp(this.otp,this.id).subscribe(data=>{
      console.log(data);
      if(data){
       localStorage.setItem("user",JSON.stringify(data));
       this.router.navigate([""]);
      }
    })
  }
  ngOnInit(): void {}
}