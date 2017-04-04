import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Observable, Subscription } from 'rxjs';

@Component({
    templateUrl: './mongodb-dashboard.component.html',
    styleUrls: ['./mongodb-dashboard.component.css']
})
export class MongodbDashboardComponent implements OnInit, OnDestroy {

    private mongodbStatFrame: any;
    private autoRefreshObservable: Observable<number> = Observable.interval(5000);
    private autoRefreshSubscription: Subscription = null;

    ngOnInit(): void {
        // $("[name='auto-refresh-checkbox']").bootstrapSwitch();
        this.mongodbStatFrame = $('#MongodbStatFrame')[0];
        this.autoRefreshChecked(true);
    }

    ngOnDestroy(): void {
        if (this.autoRefreshSubscription !== null) {
            this.autoRefreshSubscription.unsubscribe();
            this.autoRefreshSubscription = null;
        }
    }

    autoRefreshChecked(value: boolean) {
        // let selectedColor = $('#auto-refresh-checkbox input:radio:checked').val();
        if (value) {
            // start auto refresh
            if (this.autoRefreshSubscription === null) {
                this.autoRefreshSubscription = this.autoRefreshObservable.subscribe(
                    (v: number) => { this.refresh(); }
                );
            }
        } else {
            if (this.autoRefreshSubscription !== null) {
                this.autoRefreshSubscription.unsubscribe();
                this.autoRefreshSubscription = null;
            }
        }
    }

    refresh(): void {
        this.mongodbStatFrame.src = this.mongodbStatFrame.src;
    }
}
