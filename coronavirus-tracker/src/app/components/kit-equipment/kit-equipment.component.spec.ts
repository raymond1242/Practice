import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitEquipmentComponent } from './kit-equipment.component';

describe('KitEquipmentComponent', () => {
  let component: KitEquipmentComponent;
  let fixture: ComponentFixture<KitEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
