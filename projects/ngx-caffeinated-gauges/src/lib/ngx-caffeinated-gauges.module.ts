import { NgModule } from '@angular/core';
import { NgxCaffeinatedGaugesComponent } from './ngx-caffeinated-gauges.component';
import { NgxStarBurstGaugeComponent } from './ngx-star-burst-gauge/ngx-star-burst-gauge.component';


@NgModule({
  declarations: [
    NgxCaffeinatedGaugesComponent,
    NgxStarBurstGaugeComponent
  ],
  imports: [
  ],
  exports: [
    NgxCaffeinatedGaugesComponent
  ]
})
export class NgxCaffeinatedGaugesModule { }
