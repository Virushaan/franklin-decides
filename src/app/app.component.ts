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
  @ViewChild('div') div: ElementRef;
  test() {
    console.log(this.div)
  }

}
