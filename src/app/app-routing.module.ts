import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyProfileComponent } from "./my-profile/my-profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "myProfile", component: MyProfileComponent },
  { path: "", redirectTo: "/myProfile", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
