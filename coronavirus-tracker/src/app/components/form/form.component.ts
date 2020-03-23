import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  modalRef = null;
  form = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    genre: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    travel: new FormControl('', [Validators.required]),
    family: new FormControl('', [Validators.required]),
    friend: new FormControl('', [Validators.required]),
    checkCough: new FormControl(''),
    checkFever: new FormControl(''),
    checkBreathe: new FormControl(''),
    checkNose: new FormControl(''),
    checkNeck: new FormControl(''),
    opinion: new FormControl(''),
  });

  @ViewChild('badDialog', { static: true }) badDialog:
    TemplateRef<any>;

  @ViewChild('goodDialog', { static: true }) goodDialog:
    TemplateRef<any>;

  @ViewChild('takecare', { static: true }) takecare:
    TemplateRef<any>;

  @ViewChild('incomplete', { static: true }) incomplete:
    TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  open(content) {
    this.modalRef = this.dialog.open(content, {
      width: '350px',
    });
  }

  family() {
    return this.form.value.family === 'Y';
  }

  risk() {
    return this.form.value.travel === 'Y' || this.form.value.friend === 'Y';
  }

  danger() {
    if (this.family() && this.form.value.checkBreathe) {
      return 3;
    } else if (this.family() && this.form.value.checkCough) {
      return 3;
    } else if (this.family() && this.form.value.checkFever) {
      return 3;
    } else if (this.family() && this.form.value.checkNose) {
      return 3;
    } else if (this.family() && this.form.value.checkNeck) {
      return 3;
    }

    if (this.risk() && this.form.value.checkBreathe) {
      return 3;
    }

    if (this.risk() && (this.form.value.checkCough || this.form.value.checkFever || this.form.value.checkNose
      || this.form.value.checkNeck)) {
      return 2;
    }

    if (this.form.value.checkBreathe && (this.form.value.checkCough || this.form.value.checkFever
      || this.form.value.checkNose || this.form.value.checkNeck)) {
      return 2;
    }

    return 1;
  }

  func() {
    if (this.form.valid) {
      if (this.danger() === 1) {
        this.open(this.goodDialog);
      } else if (this.danger() === 2) {
        this.open(this.takecare);
      } else {
        this.open(this.badDialog);
      }
    } else {
      this.open(this.incomplete);
    }
  }
}
