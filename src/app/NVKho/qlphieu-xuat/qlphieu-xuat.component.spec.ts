import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuXuatComponent } from './qlphieu-xuat.component';

describe('QLPhieuXuatComponent', () => {
  let component: QLPhieuXuatComponent;
  let fixture: ComponentFixture<QLPhieuXuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuXuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
