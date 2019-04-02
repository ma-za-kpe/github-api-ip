import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { MyProfileService } from "../../my-profile/my-profile.service";
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

  constructor(
    private http: HttpClient,
    private mps: MyProfileService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchUser(name: HTMLInputElement): boolean {
    console.log(` ${name.value}`);
    return false;
  }
}
