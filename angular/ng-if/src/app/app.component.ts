import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayColumn1: boolean = true;
  displayColumn2: boolean = false;
  displayColumn3: boolean = true;
}