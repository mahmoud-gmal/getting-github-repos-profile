import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class ProfileService{
    public username: string;
    private userId = "816691d28c5a12d2317c";
    private clientSecret = "18d6d4af4fe20f334247f10cdab2de59789fb3c3";

    constructor( private http: HttpClient){
        console.log("service is ready");
    }


    // Getting profile info
    getProfileInfo() {
        return this.http.get('https://api.github.com/users/' + this.username +
         "?client_id=" + this.userId + "?client_secret=" + this.clientSecret)
         // HttpClient is automatically convert data response to json. So, No need to use.pipe(map(res => res.json()))
    }

    // getting profile repos
    getProfileRepos(){
        return this.http.get('https://api.github.com/users/' + this.username +
        "/repos?client_id=" + this.userId + "?client_secret=" + this.clientSecret)
    }

    // update profile username
    updateProfile(updatedUserName: string){
        this.username = updatedUserName;
    }

}