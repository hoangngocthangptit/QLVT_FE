import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNvComponent } from './edit-nv.component';

describe('EditNvComponent', () => {
  let component: EditNvComponent;
  let fixture: ComponentFixture<EditNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
