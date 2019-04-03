import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
// import "rxjs/add/operator/toPromise";

import { MyProfile } from "../my-profile/my-profile";
import { Profile } from "../my-profile/profile";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MyProfileService {
  // profile: Profile[];

  constructor(private http: HttpClient) {}

  //get name and avatar and list of repos
  getMyProfile(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe?" +
        environment.access_token +
        environment.Client_ID +
        "&" +
        environment.Client_Secret
    );
  }

  // list of repos
  getMyRepoList(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe/repos?" +
        environment.access_token +
        environment.Client_ID +
        "&" +
        environment.Client_Secret
    );
  }

  dataFromService;

  //get name and avatar and list of repos
  searchUser(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe?" +
        environment.access_token +
        environment.Client_ID +
        "&" +
        environment.Client_Secret
    );
  }
  // getMyProfile(): Observable<Profile[]> {
  //   return this.http.get<Profile[]>("");}

  // getMyProfile(): Promise<Profile[]> {
  //   return this.http
  //     .get("https://api.github.com/users/ma-za-kpe")
  //     .toPromise()
  //     .then(response => response as Profile[])
  //     .catch(err => err);
  // }
}
