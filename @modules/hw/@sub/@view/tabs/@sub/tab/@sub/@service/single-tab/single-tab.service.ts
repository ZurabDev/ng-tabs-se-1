import {ChangeDetectorRef, ElementRef, Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {TabsService} from "../tabs/tabs.service";
import {delay, delayWhen, distinctUntilChanged, map, repeatWhen, switchMap} from "rxjs/operators";

@Injectable()
export class SingleTabService {
    /**
     * */
    public gotIndex$ = new Subject();

    /**
     * */
    public getStateAfterSetInitialIdx$: Observable<boolean> = this.gotIndex$.pipe(
        delay(0),
        switchMap(
            () => this.tabService.lastClickedIdx$
        ),
        map(idx => {
            return idx === this.idx;
        }),
        distinctUntilChanged()
    );

    /**
     * */
    public idx: number;

    constructor(
        private cdRef: ChangeDetectorRef,
        private tabService: TabsService
    ) {
    }

    /**
     *
     * */
    public setCurrentIdx (idx) {
        this.idx = idx;
        this.gotIndex$.next(true);
    }
}

