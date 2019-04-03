import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { Repos } from "../repo/repos";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReposService {
  user: Repos[];
  public username: string;

  constructor(private http: HttpClient) {}

  getUsers(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(
      `https://api.github.com/search/users?q=${name}&per_page=100` +
        environment.access_token +
        environment.Client_ID +
        `&` +
        environment.Client_Secret
    );
  }

  // list of repos
  getMyRepoList(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(
      `https://api.github.com/users/${name}/repos?` +
        environment.access_token +
        environment.Client_ID +
        `&` +
        environment.Client_Secret
    );
  }
}
