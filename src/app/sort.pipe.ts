import { Pipe, PipeTransform } from "@angular/core";

import { Profile } from "../app/my-profile/profile";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(profile: Profile[], value: number): string {
    var x = profile.filter(p => {
      p.name;
    });
    return;
  }
}
