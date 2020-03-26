import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  latitude =  -9.0431800;
  longitude = -75.0282400;
  zoom = 5;
  mapType = 'hybrid';
  data: AngularFireList<any>;

  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;

  constructor(
    private database: AngularFireDatabase
  ) { }

  weigth(w: number){
    if (w === 1) {
      return 0.5;
    } else if (w === 2.5) {
      return 2.5;
    } else {
      return 5;
    }
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    this.data.valueChanges().subscribe(users => {
      let coords = [];
      users.forEach(user => {
        if(user.lat && user.lng) {
          coords.push({
            location: new google.maps.LatLng(user.lat, user.lng),
            weight: this.weigth(user.danger)
          });
        }
      });
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: coords
      });
    });
  }

  ngOnInit() {
    this.data = this.database.list('/usuario');
  }
}
