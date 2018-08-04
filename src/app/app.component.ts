import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {LocationServiceService} from './services/location-service.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private locationService:LocationServiceService, private http: HttpClient) { }
  public userName = '';

  title = 'app';
  public loading = false;
  public formUnsubmitted = true;
  result = {};

  async nameEventHander($event: any) {

    this.userName = $event;
    console.log(this.userName)
    if (this.userName == "loaded") {
      this.loading = true;
      this.formUnsubmitted = false;
      // this.result = this.locationService.findMe();
      this.result = await this.http.get("/api/get_location?longitude=151.1949701&latitude=-33.881926").toPromise()
      .catch(err => {
        console.log('caught');
        return ([
          {
              "google_id": "ChIJsWshFimuEmsROS-cpe6mPv8",
              "name": "Australian Youth Hotel",
              "address": "63 Bay St, Glebe NSW 2037, Australia",
              "google_maps_url": "https://maps.google.com/?cid=18392321472138587961",
              "website": "http://www.australianyouthhotel.com.au/",
              "phone_number": "(02) 9692 0414"
          },
          {
              "google_id": "ChIJVYvhpymuEmsR_mJlBL1aKHg",
              "name": "Salt Meats Cheese Broadway",
              "address": "68 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=8658270051488850686",
              "website": "http://www.saltmeatscheese.com.au/broadway",
              "phone_number": "(02) 9281 5048"
          },
          {
              "google_id": "ChIJUR7olimuEmsRuSMDHV6mO50",
              "name": "Burger Project",
              "address": "Broadway Shopping Centre, Outside Entry, 1 Bay Street, Broadway NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=11329832210724496313",
              "website": "http://www.burgerproject.com/",
              "phone_number": "(02) 9259 5600"
          },
          {
              "google_id": "ChIJ2e3vvCmuEmsR5vHt5GqrZ6k",
              "name": "Nando's Broadway S/C",
              "address": "216/1 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=12206913790606701030",
              "website": "http://www.nandos.com.au/restaurants/broadway-sc",
              "phone_number": "1300 626 367"
          },
          {
              "google_id": "ChIJGXWCoymuEmsRLp9Pp6h2Yd0",
              "name": "Mr. Wu Dumpling Bar",
              "address": "shop 212 level/2 Broadway, Glebe NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=15952161821856603950",
              "website": "http://www.mrwu.com.au/",
              "phone_number": "(02) 9282 9209"
          },
          {
              "google_id": "ChIJa9_5pymuEmsRfK_69_a3s9g",
              "name": "Sushi Hon",
              "address": "Broadway Shopping Centre, 210/1 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=15615026604373880700",
              "website": "http://sushihon.com.au/",
              "phone_number": "(02) 9211 0152"
          },
          {
              "google_id": "ChIJdWZAuymuEmsRwl1B66cPU9M",
              "name": "Zeus Street Greek Broadway Sydney",
              "address": "Level 2, 1-21 Bay St, Broadway NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=15227531978950663618",
              "website": "http://www.zsg.com.au/",
              "phone_number": "(02) 8315 5650"
          },
          {
              "google_id": "ChIJyYMcpimuEmsRJwK1gB36pes",
              "name": "A La Turko Kebabs",
              "address": "Glebe NSW 2037, Australia",
              "google_maps_url": "https://maps.google.com/?cid=16980252974690664999",
              "website": "http://www.alaturko.com.au/menu-kebabs.html",
              "phone_number": "(02) 9281 6565"
          },
          {
              "google_id": "ChIJR9DxlymuEmsRwfRQ2ps09mg",
              "name": "Guzman Y Gomez",
              "address": "Food Precinct, Broadway Shopping Centre, s219/1 Bay St, Glebe NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=7563290468202640577",
              "website": "https://www.guzmanygomez.com/",
              "phone_number": null
          },
          {
              "google_id": "ChIJS1VVlSiuEmsRiSmahXKNdX0",
              "name": "Schnitz",
              "address": "218/1 Bay St, Glebe NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=9040287350023399817",
              "website": "http://schnitz.com.au/",
              "phone_number": "(02) 9280 4439"
          },
          {
              "google_id": "ChIJDRw9oymuEmsR9KE0VAi_8QE",
              "name": "Mr. Wu Dumpling Bar",
              "address": "Shop 212, Level 2, Broadway Sydney, 1 Bay Street, Glebe NSW 2037, Australia",
              "google_maps_url": "https://maps.google.com/?cid=140103105918575092",
              "website": "http://www.mrwu.com.au/",
              "phone_number": "(02) 9282 9209"
          },
          {
              "google_id": "ChIJzTFBlymuEmsRftw3wXY7fGE",
              "name": "Mumbai Express",
              "address": "2, 1 Bay St, Broadway NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=7024554900024974462",
              "website": null,
              "phone_number": "(02) 9212 1864"
          },
          {
              "google_id": "ChIJ_dwOvSmuEmsRgDVdebNLO08",
              "name": "Bondi Pizza Broadway",
              "address": "208/1 Bay St, Glebe NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=5709240186829616512",
              "website": "http://www.bondipizza.com.au/",
              "phone_number": "(02) 9281 9677"
          },
          {
              "google_id": "ChIJhSDnkymuEmsRzN1QSBTMxP8",
              "name": "Grill'd Broadway",
              "address": "Broadway Shopping Centre, 1 Bay St, Broadway NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=18430079962591583692",
              "website": "https://www.grilld.com.au/restaurants/new-south-wales/sydney/broadway#GoogleLocal",
              "phone_number": "(02) 9211 1085"
          },
          {
              "google_id": "ChIJ-UtBlymuEmsRdRNIFErfdyE",
              "name": "Hero Sushi",
              "address": "Level 2, Broadway Shopping Centre, 1 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=2411641634741031797",
              "website": "https://herosushi.com.au/",
              "phone_number": null
          },
          {
              "google_id": "ChIJQ6G0WyauEmsRwrzGgDuSsNM",
              "name": "Sushi World",
              "address": "g06/1-21 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=15253852722165103810",
              "website": "http://www.sushiworld.com.au/",
              "phone_number": "(02) 9695 0888"
          },
          {
              "google_id": "ChIJB9PnlimuEmsR9vNPiOOhRTo",
              "name": "SumoSalad",
              "address": "1 Bay St, Glebe NSW 2037, Australia",
              "google_maps_url": "https://maps.google.com/?cid=4198940226209444854",
              "website": "http://sumosalad.com/",
              "phone_number": null
          },
          {
              "google_id": "ChIJ-UtBlymuEmsRfvcS-g-e6vE",
              "name": "Eat Istanbul",
              "address": "Broadway Shopping Centre, Level 2, 1 Bay St, Broadway, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=17431919099148171134",
              "website": "https://www.zomato.com/sydney/eat-istanbul-cbd",
              "phone_number": null
          },
          {
              "google_id": "ChIJ7aKzuimuEmsRsxTrDlarzHU",
              "name": "Merchants of Ultimo",
              "address": "Ground, Broadway, 1 Bay St, Ultimo NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=8488347783792366771",
              "website": "http://www.merchantsofultimo.com/",
              "phone_number": "(02) 9346 8775"
          },
          {
              "google_id": "ChIJL2KXpSmuEmsRbzHmb-2kUNY",
              "name": "Sumo Green Label",
              "address": "1 Broadway, Rushcutters Bay NSW 2007, Australia",
              "google_maps_url": "https://maps.google.com/?cid=15443024461944992111",
              "website": "http://www.sumosalad.com/",
              "phone_number": "(02) 9211 5586"
          }
      ]);
      });;
      console.log(this.locationService.findMe());
      console.log(this.result);
    }
  }
  ngOnInit() {
  }
}
