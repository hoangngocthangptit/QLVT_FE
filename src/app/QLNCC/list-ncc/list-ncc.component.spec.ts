import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNCCComponent } from './list-ncc.component';

describe('ListNCCComponent', () => {
  let component: ListNCCComponent;
  let fixture: ComponentFixture<ListNCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
