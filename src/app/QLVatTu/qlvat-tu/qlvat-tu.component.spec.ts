import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLVatTuComponent } from './qlvat-tu.component';

describe('QLChiNhanhComponent', () => {
  let component: QLVatTuComponent;
  let fixture: ComponentFixture<QLVatTuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLVatTuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLVatTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
