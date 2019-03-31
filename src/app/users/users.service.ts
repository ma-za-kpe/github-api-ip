import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { Users } from "../users/users";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //get nae and avatar and list of repos
  getMyProfile(): Observable<Users> {
    return this.http.get<Users>("https://api.github.com/search/users");
  }
}
