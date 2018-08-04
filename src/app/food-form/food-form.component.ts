import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationServiceService } from '../services/location-service.service';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})

export class FoodFormComponent implements OnInit {

  @Output() nameEvent = new EventEmitter<string>();
  @Output() startEvent = new EventEmitter<void>();
  userName: string = 'none';

  renderForm = false;
  formCharacter = 'v';
  constructor(private locationService:LocationServiceService) { }

  formSubmit() {
    this.userName = 'loaded'
    this.nameEvent.emit(this.userName);
  }

  openForm() {
    this.renderForm = !this.renderForm;
    if (this.formCharacter == 'v'){
      this.formCharacter = '^';
    } else {
      this.formCharacter = 'v';
    }
  }

  ngOnInit() {
  }

  start() {
    this.startEvent.emit();
  }

}
