import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCaffeinatedGaugesComponent } from './ngx-caffeinated-gauges.component';

describe('NgxCaffeinatedGaugesComponent', () => {
  let component: NgxCaffeinatedGaugesComponent;
  let fixture: ComponentFixture<NgxCaffeinatedGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCaffeinatedGaugesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCaffeinatedGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
