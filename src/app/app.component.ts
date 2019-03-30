import { Component } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log("base url: " + environment.base_url);
  }

  ngOnInit() {
    this.http
      .get(environment.base_url + "/users/ma-za-kpe/repos")
      .subscribe(data => {
        // Successful API request.
        console.log(data);
      });
    // this.http.get(environment.base_url + "/users").subscribe(data => {
    //   // Successful API request.
    //   console.log(data);
    // });
  }

  title = "githubSearch";
}
