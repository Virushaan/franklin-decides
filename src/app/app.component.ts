import { Component, ViewChild, ElementRef } from '@angular/core';
import {LocationServiceService} from './services/location-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public userName = '';

  title = 'app';
  public loading = false;
  public formUnsubmitted = true;

  nameEventHander($event: any) {

    this.userName = $event;
    console.log(this.userName)
    if (this.userName == "loaded") {
      this.loading = true;
      this.formUnsubmitted = false;
    }
  }
}
