import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsExamplesComponent } from './components/rxjs-examples/rxjs-examples.component';
import {
  MergeConcatSwitchExhaustedComponent
} from './components/merge-concat-switch-exhausted/merge-concat-switch-exhausted.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsExamplesComponent
  },
  {
    path: 'merge-concat-switch-exhausted',
    component: MergeConcatSwitchExhaustedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsExamplesRoutingModule { }
