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
  users: any;

  constructor(
    private database: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.data = this.database.list('/usuario');
    this.data.valueChanges().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
