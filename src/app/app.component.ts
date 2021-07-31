import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-angular-app';
  imageSource = 'https://b.zmtcdn.com/data/pictures/9/19543549/e7791156dc019c57c86c314ffb82563b_o2_featured_v2.jpg?output-format=webp';

  textValue = "My Text";
  dataFromChild = "";

  userObj = {
    name: "Abhishek",
    course: "Angular",
    modules: 10,
    isActive: true
  }

  openAlertBox() {
    alert("Hello World");
  }

  comingFromChild(data: any) {
    this.dataFromChild = data;
  }
}
