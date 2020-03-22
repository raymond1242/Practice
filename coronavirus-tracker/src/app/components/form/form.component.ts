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
    email: new FormControl('',[Validators.email]),
    travel: new FormControl('', [Validators.required]),
    family: new FormControl('', [Validators.required]),
    checkFlu: new FormControl(''),
    checkCough: new FormControl(''),
    checkFever: new FormControl(''),
    checkShaking: new FormControl(''),
    checkPain: new FormControl(''),
    checkBreathe: new FormControl(''),
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

  danger() {
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
      this.open(this.goodDialog);
    } else {
      this.open(this.incomplete);
    }
  }
}
