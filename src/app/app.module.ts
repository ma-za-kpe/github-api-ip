import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";

import { MyProfileService } from "./my-profile/my-profile.service";

@NgModule({
  declarations: [AppComponent, MyProfileComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MyProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
