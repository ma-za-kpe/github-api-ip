import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Profile } from "../my-profile/profile";
import { MyProfileService } from "../my-profile/my-profile.service";
import { MyProfile } from "./my-profile";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"]
})
export class MyProfileComponent implements OnInit {
  // myprofile: MyProfile[];
  profile: Profile;
  name;
  image;

  constructor(private mps: MyProfileService, private router: Router) {}

  ngOnInit() {
    this.getProfile();
    this.repos();
  }

  getProfile() {
    this.mps.getMyProfile().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.image = data.avatar_url;
      // this.profile = data;
    });
  }

  repos() {
    this.mps.getMyRepoList().subscribe(repo => {
      console.log(repo);
      this.profile = repo;
    });
  }

  searchUser(name: HTMLInputElement): boolean {
    console.log(` ${name.value}`);
    // this.foodTracker.push(
    //   new FoodTracker(name.value, parseInt(calories.value), details.value)
    // );
    name.value = "";
    this.router.navigateByUrl("/user");
    return false;
  }

  // getProfile() {
  //   this.mps
  //     .getMyProfile()
  //     .then(result => {
  //       console.log("ALL Data: ", result);

  //       // const values = Object.keys(result).map(it => result[it]);
  //       // const json = JSON.stringify(result);
  //       console.log("ALL Data: ", result);
  //       this.profile = result;
  //     })
  //     .catch(error => {
  //       console.log("Error Getting Data: ", error);
  //     });
  // }
}
