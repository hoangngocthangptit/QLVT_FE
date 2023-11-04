import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddNccComponent } from './edit-add-ncc.component';

describe('EditAddNccComponent', () => {
  let component: EditAddNccComponent;
  let fixture: ComponentFixture<EditAddNccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddNccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddNccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
