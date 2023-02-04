import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { MergeConcatSwitchExhaustedComponent } from './components/merge-concat-switch-exhausted/merge-concat-switch-exhausted.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { RxjsService } from './services/rxjs.service';
import { HttpClientModule } from '@angular/common/http';
import { DebounceThrottleComponent } from './components/debounce-throttle/debounce-throttle.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    MergeConcatSwitchExhaustedComponent,
    RxjsComponent,
    DebounceThrottleComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    HttpClientModule,
    NzCardModule,
    NzButtonModule,
    NzDividerModule
  ],
  providers: [RxjsService]
})
export class RxjsModule {
}
