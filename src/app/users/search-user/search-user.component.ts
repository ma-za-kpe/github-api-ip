import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { UsersService } from "../../users/users.service";
import { Users } from "../users";
import { MyProfileComponent } from "../../my-profile/my-profile.component";
import { Router } from "@angular/router";
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";

@Component({
  selector: "app-search-user",
  templateUrl: "./search-user.component.html",
  styleUrls: ["./search-user.component.css"]
})
export class SearchUserComponent implements OnInit {
  name: Users;
  title = "hi";
  public Client_ID = "485a827e471b486920c7";
  public Client_Secret = "d2e17ac3e482e02b0bcd938f0f333a96710bc4ab";

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
    });
    return false;
  }
}
