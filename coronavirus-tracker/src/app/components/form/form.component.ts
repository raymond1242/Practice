import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    genre: new FormControl(''),
    age: new FormControl(''),
    cellphone: new FormControl(''),
    travel: new FormControl(''),
    family: new FormControl(''),
    checkFlu: new FormControl(''),
    checkCough: new FormControl(''),
    checkFever: new FormControl(''),
    checkShaking: new FormControl(''),
    checkPain: new FormControl(''),
    checkBreathe: new FormControl(''),
    opinion: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
