import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../_services/user-data.service';
import { UserProfile } from '../common/model/user-profile';
import { UserProfileVO } from '../common/model/user-profile-vo';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.scss']
})
export class ClientTasksComponent implements OnInit {
  user = new UserProfileVO();

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUser()
    .subscribe((userData: UserProfile) => {
      this.user = userData;
    });
  }

}
