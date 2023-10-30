import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddComponentChiNhanh } from './edit-add.component';

describe('EditAddComponent', () => {
  let component: EditAddComponentChiNhanh;
  let fixture: ComponentFixture<EditAddComponentChiNhanh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddComponentChiNhanh ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddComponentChiNhanh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
