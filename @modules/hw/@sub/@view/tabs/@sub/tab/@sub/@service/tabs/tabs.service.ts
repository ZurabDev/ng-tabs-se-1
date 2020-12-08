import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class TabsService {
    /**
     * flow$ wit last clicked idx (default first)
     * */
    public lastClickedIdx$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    /**
     * mark first tab if delete active tab
     * */
    public markFirstIfNeedAfterDelete (idx: number) {
        if (this.lastClickedIdx$.getValue() === idx) {
            this.lastClickedIdx$.next(0);
        }
    }

    /**
     * save last clicked idx if it changed
     * */
    public setLastClicked (idx: number) {
        if (this.lastClickedIdx$.getValue() !== idx) {
            this.lastClickedIdx$.next(idx);
        }
    }
}

