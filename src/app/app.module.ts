import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatMenuModule, MatToolbarModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select'
import { MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SpinnerComponent } from './spinner/spinner.component';
import { ApiTestComponent } from './api-test/api-test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    FoodFormComponent,
    SpinnerComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

