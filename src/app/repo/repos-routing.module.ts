import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchRepoComponent } from "./search-repo/search-repo.component";

const routes: Routes = [{ path: "repo", component: SearchRepoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {}
