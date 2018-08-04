import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';

  findMe() {
    console.log("Finding me")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('arrow')
        this.showPosition(position);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    console.log("Hello");
    console.log(position.coords.latitude, position.coords.longitude);
  }


}
