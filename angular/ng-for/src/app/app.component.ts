import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: any[] = [
    {
      firstName: "jack",
      lastName: "a",
      email: "jack.a@gmail.com"
    },
    {
      firstName: "jill",
      lastName: "b",
      email: "jill.b@gmail.com"
    },
    {
      firstName: "jane",
      lastName: "c",
      email: "jane.c@gmail.com"
    },
    {
      firstName: "john",
      lastName: "d",
      email: "john.d@gmail.com"
    }
  ];
}
