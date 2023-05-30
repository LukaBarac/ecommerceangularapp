import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../auth/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog) {}

  openProfile(userId: number) {
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "60%",
      data: {user: this.userService.getUserById(userId)}
    })

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

}
