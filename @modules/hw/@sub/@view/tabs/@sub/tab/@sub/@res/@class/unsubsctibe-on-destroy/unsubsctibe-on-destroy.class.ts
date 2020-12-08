import {Subject} from "rxjs";

export abstract class UnsubscribeOnDestroyClass {
    /**
     * emit when component destroy
     * */
    protected viewDestroy$ = new Subject();

    /***/
    ngOnDestroy () {
        this.viewDestroy$.next();
        this.viewDestroy$.unsubscribe();
    }
}