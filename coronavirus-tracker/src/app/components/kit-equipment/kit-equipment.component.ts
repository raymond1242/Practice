import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kit-equipment',
  templateUrl: './kit-equipment.component.html',
  styleUrls: ['./kit-equipment.component.css']
})
export class KitEquipmentComponent implements OnInit {

  dataPeru: any = null;
  dataWorld: any = null;
  dataHistory: any = null;

  constructor(
    protected http: HttpClient
  ) { }

  ngOnInit() {
    this.getCOVIDdataPeru().subscribe(
      response => {
        this.dataPeru = response[0];
    });
    this.getCOVIDdataWorld().subscribe(
      response => {
        this.dataWorld = response[0];
    });
  }

  getCOVIDdataPeru(): Observable<any> {
    return this.http.get("https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=pe", {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		    "x-rapidapi-key": "b0ec4b8f9amsh6abc78efb1131d0p17b16bjsncff41d672d8f"
      }
    });
  }

  getCOVIDdataWorld(): Observable<any> {
    return this.http.get("https://covid-19-data.p.rapidapi.com/totals", {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	      "x-rapidapi-key": "b0ec4b8f9amsh6abc78efb1131d0p17b16bjsncff41d672d8f"
      }
    });
  }
}
