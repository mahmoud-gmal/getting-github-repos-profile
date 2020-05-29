import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:any;
  repos:any;
  username: string;
  constructor(private profileServic: ProfileService){

    this.profileServic.getProfileInfo().subscribe( data => {
      this.profile = data;
    });
    this.profileServic.getProfileRepos().subscribe( repos => {
      this.repos = repos;
    });
    
  }

  findProfile(){
    this.profileServic.updateProfile(this.username);
    this.profileServic.getProfileInfo().subscribe(data => this.profile = data);
    this.profileServic.getProfileRepos().subscribe(repos => this.repos = repos);
  }

  ngOnInit(): void {
  }

}
