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
  public username: string = "ma-za-kpe";
  public Client_ID = "485a827e471b486920c7";
  public Client_Secret = "d2e17ac3e482e02b0bcd938f0f333a96710bc4ab";

  constructor(private http: HttpClient) {}

  //get nae and avatar and list of repos
  getMyProfile(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe?" +
        environment.access_token +
        this.Client_ID +
        "&" +
        this.Client_Secret
    );
  }

  // list of repos
  getMyRepoList(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe/repos?" +
        environment.access_token +
        this.Client_ID +
        "&" +
        this.Client_Secret
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
