import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLChiNhanhComponent } from './qlchi-nhanh.component';

describe('QLChiNhanhComponent', () => {
  let component: QLChiNhanhComponent;
  let fixture: ComponentFixture<QLChiNhanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLChiNhanhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLChiNhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
