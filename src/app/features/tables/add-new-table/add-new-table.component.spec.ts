import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTableComponent } from './add-new-table.component';

describe('AddNewTableComponent', () => {
  let component: AddNewTableComponent;
  let fixture: ComponentFixture<AddNewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
