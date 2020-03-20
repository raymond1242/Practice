import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';

  constructor() { }

  ngOnInit() {
  }

}
