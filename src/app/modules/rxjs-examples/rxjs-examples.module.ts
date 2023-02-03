import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsExamplesRoutingModule } from './rxjs-examples-routing.module';
import {
    MergeConcatSwitchExhaustedComponent
} from './components/merge-concat-switch-exhausted/merge-concat-switch-exhausted.component';
import { RxjsExamplesComponent } from './components/rxjs-examples/rxjs-examples.component';
import { RxjsExamplesService } from './services/rxjs-examples.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        MergeConcatSwitchExhaustedComponent,
        RxjsExamplesComponent
    ],
    imports: [
        CommonModule,
        RxjsExamplesRoutingModule,
        HttpClientModule
    ],
    providers: [RxjsExamplesService]
})
export class RxjsExamplesModule {
}
