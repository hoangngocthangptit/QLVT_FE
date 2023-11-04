import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPhieuxuatComponent } from './edit-add-phieuxuat.component';

describe('EditAddPhieuxuatComponent', () => {
  let component: EditAddPhieuxuatComponent;
  let fixture: ComponentFixture<EditAddPhieuxuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddPhieuxuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddPhieuxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
