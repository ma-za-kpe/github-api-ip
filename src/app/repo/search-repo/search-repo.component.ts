import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UsersService } from "../../users/users.service";
import { Users } from "../users";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-user",
  templateUrl: "./search-user.component.html",
  styleUrls: ["./search-user.component.css"]
})
export class SearchUserComponent implements OnInit {
  users: Users[];
  user: Users;
  name;
  image;
  url;

  constructor(
    private http: HttpClient,
    private us: UsersService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchUser(name: HTMLInputElement): boolean {
    console.log(` ${name.value}`);

    this.us.getUsers(name.value).subscribe(d => {
      console.log(d);
      console.log(Object.values(d));
      var x = Object.values(d).map(xx => {
        console.log(xx[0]);
        return xx[0];
      });
      console.log(x[2]);

      var result = Object.keys(x[2]).map(function(key) {
        return [String(key), x[2][key]];
      });

      console.log(result);
      console.log(result[0][1]);

      console.log(result[3][1]);
      console.log(result[5][1]);

      this.name = result[0][1];
      this.image = result[3][1];
      this.url = result[5][1];
      // this.users = d.items;
    });

    this.us.getMyRepoList(name.value).subscribe(repo => {
      console.log(
        repo.map(r => {
          return r.name;
        })
      );

      var repositories = repo.map(r => {
        return r;
      });
      this.users = repositories;
    });

    return false;
  }
}
