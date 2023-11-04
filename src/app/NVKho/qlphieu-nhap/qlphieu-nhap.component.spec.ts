import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuNhapComponent } from './qlphieu-nhap.component';

describe('QLPhieuNhapComponent', () => {
  let component: QLPhieuNhapComponent;
  let fixture: ComponentFixture<QLPhieuNhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuNhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
