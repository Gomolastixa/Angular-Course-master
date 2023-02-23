import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{title}}</h1>
    <pm-products></pm-products>
    <pm-footer></pm-footer>
  </div>
  `
  // templateUrl: './app.component.html'
})

export class AppComponent {
  title = "Acme Product Management";
}