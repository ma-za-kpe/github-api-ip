import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import "angular2-navigate-with-data";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";

import { MyProfileService } from "./my-profile/my-profile.service";
import { UsersModule } from "./users/users.module";
import { ReposModule } from "./repo/repos.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, MyProfileComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    ReposModule,
    AppRoutingModule
  ],
  providers: [MyProfileService, NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
