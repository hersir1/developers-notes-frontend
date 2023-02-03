import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rxjs-examples',
    loadChildren: () => import('./modules/rxjs-examples/rxjs-examples.module').then(m => m.RxjsExamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
