import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor() { }

  // private position = new BehaviorSubject<{}>({

  // })

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
