import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  errorExists!: boolean;
  errorText = "";

  constructor(private userService: UserService, private router: Router) {}
  

  onSubmit(form : NgForm) {
    // console.log(form);
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);
    if(!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with email " + email;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect!";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }


  ngOnInit(): void {
    
  }

}
