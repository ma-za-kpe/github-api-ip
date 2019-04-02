import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReposRoutingModule } from "./repos-routing.module";
import { SearchRepoComponent } from "./search-repo/search-repo.component";

@NgModule({
  declarations: [SearchRepoComponent],
  imports: [CommonModule, ReposRoutingModule]
})
export class ReposModule {}
