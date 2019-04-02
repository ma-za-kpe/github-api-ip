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
  public Client_ID = "485a827e471b486920c7";
  public Client_Secret = "d2e17ac3e482e02b0bcd938f0f333a96710bc4ab";
  public access_token: " 8b952f75ba604e65ba16075f5ac7a887e8e68f1d ";

  constructor(private http: HttpClient) {}

  getUsers(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(
      `https://api.github.com/search/users?q=${name}&per_page=100` +
        this.access_token +
        this.Client_ID +
        `&` +
        this.Client_Secret
    );
  }

  // list of repos
  getMyRepoList(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(
      `https://api.github.com/users/${name}/repos?` +
        this.access_token +
        this.Client_ID +
        `&` +
        this.Client_Secret
    );
  }
}
