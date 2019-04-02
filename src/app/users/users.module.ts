import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { SearchUserComponent } from "./search-user/search-user.component";

@NgModule({
  declarations: [SearchUserComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
