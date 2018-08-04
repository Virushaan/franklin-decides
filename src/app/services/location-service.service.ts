import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

  private out = new BehaviorSubject({})
  cast = this.out.asObservable();
  findMe() {
    console.log("Finding me")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('arrow')
        // console.log(this.showPosition(position));
        return this.showPosition(position);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    console.log("Hello");
    return this.getPlaces(position.coords.latitude, position.coords.longitude);

  }

  getPlaces(lat, long) {
    // return this.http.get("localhost:8080/get_location?longitude=151.1949701&latitude=-33.881926")
    // console.log(this.http.get("https://jsonplaceholder.typicode.com/todos/1"))
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1")

  }

}
