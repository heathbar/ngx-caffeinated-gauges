import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStarBurstGaugeComponent } from './ngx-star-burst-gauge.component';

describe('NgxStarBurstGaugeComponent', () => {
  let component: NgxStarBurstGaugeComponent;
  let fixture: ComponentFixture<NgxStarBurstGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStarBurstGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStarBurstGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
