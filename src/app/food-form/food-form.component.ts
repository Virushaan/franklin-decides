import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../services/location-service.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  constructor(private locationService:LocationServiceService) { }

  getLocation() {
    this.locationService.findMe();
  }
  ngOnInit() {
  }

}
