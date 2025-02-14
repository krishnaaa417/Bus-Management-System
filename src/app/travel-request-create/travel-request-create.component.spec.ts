import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestCreateComponent } from './travel-request-create.component';

describe('TravelRequestCreateComponent', () => {
  let component: TravelRequestCreateComponent;
  let fixture: ComponentFixture<TravelRequestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelRequestCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
