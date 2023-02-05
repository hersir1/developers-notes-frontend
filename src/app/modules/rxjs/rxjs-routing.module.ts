import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import {
  MergeConcatSwitchExhaustedComponent
} from './components/merge-concat-switch-exhausted/merge-concat-switch-exhausted.component';
import { DebounceThrottleComponent } from './components/debounce-throttle/debounce-throttle.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  },
  {
    path: 'merge-concat-switch-exhausted',
    component: MergeConcatSwitchExhaustedComponent
  },
  {
    path: 'debounce-throttle-time',
    component: DebounceThrottleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
