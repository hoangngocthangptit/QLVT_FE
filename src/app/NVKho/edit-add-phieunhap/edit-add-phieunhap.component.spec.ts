import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPhieunhapComponent } from './edit-add-phieunhap.component';

describe('EditAddPhieunhapComponent', () => {
  let component: EditAddPhieunhapComponent;
  let fixture: ComponentFixture<EditAddPhieunhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddPhieunhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddPhieunhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
