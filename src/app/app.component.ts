import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monitor APP';

  public static pages = [
    {
      url: "/dashboard",
      title: "Dashboard"
    },
    {
      url: "/info",
      title: "Systeminfo"
    }
  ]
}
