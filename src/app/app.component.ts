import { Component, ViewChild, ElementRef } from '@angular/core';
import {LocationServiceService} from './services/location-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  public loading = false;
  public formUnsubmitted = true;
  public page = 'landing';
  // landing - home page
  // loading - loading things
  // spinner - page with the spinner
  // results - results page

  nameEventHander($event: any) {

    this.userName = $event;
    console.log(this.userName)
    if (this.userName == "loaded") {
      this.loading = true;
      this.formUnsubmitted = false;
    }
  }

  startEventHandler() {
    this.page = 'loading';
    // todo: request stuff from server
  }

  spinCompleteHandler() {
    // ...
  }
}
