import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-rxjs-examples',
    templateUrl: './rxjs-examples.component.html',
    styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent implements OnInit {

    constructor(
        private router: Router,
        public activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {

    }

    mergeConcatSwitchExhausted(): void {
        this.router.navigate(['merge-concat-switch-exhausted'], {relativeTo: this.activatedRoute})
    }

}
