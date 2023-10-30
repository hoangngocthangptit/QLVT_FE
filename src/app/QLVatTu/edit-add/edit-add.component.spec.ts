import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddComponentVatTu } from './edit-add.component';

describe('EditAddComponent', () => {
  let component: EditAddComponentVatTu;
  let fixture: ComponentFixture<EditAddComponentVatTu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddComponentVatTu ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddComponentVatTu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
