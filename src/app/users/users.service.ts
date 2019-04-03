import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { Users } from "../users/users";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  user: Users[];
  public username: string;

  constructor(private http: HttpClient, private us: UsersService) {}

  getUsers(name: string): Observable<Users[]> {
    return this.http.get<Users[]>(
      `https://api.github.com/search/users?q=${name}&per_page=100` +
        environment.access_token +
        environment.Client_ID +
        `&` +
        environment.Client_Secret
    );
  }

  // list of repos
  getMyRepoList(name: string): Observable<Users[]> {
    return this.http.get<Users[]>(
      `https://api.github.com/users/${name}/repos?` +
        environment.access_token +
        environment.Client_ID +
        `&` +
        environment.Client_Secret
    );
  }
}
