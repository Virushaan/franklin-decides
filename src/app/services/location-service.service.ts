import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

  private out = new BehaviorSubject({})
  private cachedLocation = null;

  cast = this.out.asObservable();
  findMe() {
    console.log("Finding me", this)
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position) => {
        this.cachedLocation = position;
        console.log('found me', position, this);
        return position;
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getLocation() {
    return this.cachedLocation;
  }
}
