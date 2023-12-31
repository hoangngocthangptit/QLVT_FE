import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddComponentKho } from './edit-add.component';

describe('EditAddComponent', () => {
  let component: EditAddComponentKho;
  let fixture: ComponentFixture<EditAddComponentKho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddComponentKho ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddComponentKho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
