import {UnsubscribeOnDestroyClass} from "../unsubsctibe-on-destroy/unsubsctibe-on-destroy.class";
import {ChangeDetectorRef, ElementRef, Injectable} from "@angular/core";
import {SingleTabService} from "../../../@service/single-tab/single-tab.service";
import {delay, switchMap, takeUntil} from "rxjs/operators";

export class TabState extends UnsubscribeOnDestroyClass {
    /**
     * active or not this tab
     * */
    public get active () {
        return this.active_
    };

    /**
     *
     * */
    private active_: boolean;

    /**
     * flow with active value and with auto destroy
     * */
    public get active$ () {
        return this.singleTabService_.getStateAfterSetInitialIdx$
    }

    /**
     *
     * */
    private cdRef_: ChangeDetectorRef;

    /**
     * */
    private singleTabService_: SingleTabService;

    constructor(
        cdRef: ChangeDetectorRef,
        singleTabService: SingleTabService
    ) {
        super();

        this.cdRef_ = cdRef;
        this.singleTabService_ = singleTabService;
    }

    /**
     * */
    protected initActiveStateUpdater () {
        this.singleTabService_.getStateAfterSetInitialIdx$.pipe(
            takeUntil(this.viewDestroy$)
        ).subscribe(
            (active) => {
                this.active_ = active;
            }
        );
    }
}