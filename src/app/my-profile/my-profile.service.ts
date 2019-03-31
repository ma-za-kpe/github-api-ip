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

  //get nae and avatar and list of repos
  getMyProfile(): Observable<Profile> {
    return this.http.get<Profile>("https://api.github.com/users/ma-za-kpe");
  }

  // list of repos
  getMyRepoList(): Observable<Profile> {
    return this.http.get<Profile>(
      "https://api.github.com/users/ma-za-kpe/repos"
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
