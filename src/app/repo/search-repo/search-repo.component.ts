import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ReposService } from "../../repo/repos.service";
import { Repos } from "../repos";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-repo",
  templateUrl: "./search-repo.component.html",
  styleUrls: ["./search-repo.component.css"]
})
export class SearchRepoComponent implements OnInit {
  repos: Repos[];
  repo: Repos;
  name;
  image;
  url;

  constructor(
    private http: HttpClient,
    private us: ReposService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchUser(name: HTMLInputElement): boolean {
    console.log(` ${name.value}`);

    this.us.getMyRepoList(name.value).subscribe(repo => {
      console.log(
        repo.map(r => {
          return r.html_url;
        })
      );

      var repositories = repo.map(r => {
        return r;
      });
      this.repos = repositories;
    });

    return false;
  }
}
