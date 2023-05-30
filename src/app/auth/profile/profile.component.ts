import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) {}   //mehanizam koji dohvata sve podatke matdialogdata



  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      password: this.data.user.password,
      address: this.data.user.address
    }
  }

  finishEditing(form: NgForm) {
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

}
