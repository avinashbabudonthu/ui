import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  h1Text: string = "H1 text";
  img1: string = "./assets/images/1.jpg";
  imgTitle: string = "Image 1";
  imageWidth: number = 100;
  imageMargin: number = 2;
  toggleValue: boolean = true;
  showImage: boolean = true;
  name: string = "no name";
  total: number = 100.25;

  toggle(): void {
    this.toggleValue = !this.toggleValue;
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}