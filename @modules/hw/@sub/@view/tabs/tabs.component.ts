import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren, HostBinding,
  Input,
  OnInit, QueryList
} from '@angular/core';
import {TabContentComponent} from "./@sub/tab/@sub/@view/tab-content/tab-content.component";
import {TabTitleComponent} from "./@sub/tab/@sub/@view/tab-title/tab-title.component";
import {TabsService} from "./@sub/tab/@sub/@service/tabs/tabs.service";
import {TabComponent} from "./@sub/tab/tab.component";
import {UnsubscribeOnDestroyClass} from "./@sub/tab/@sub/@res/@class/unsubsctibe-on-destroy/unsubsctibe-on-destroy.class";
import {map, startWith, takeUntil} from "rxjs/operators";
import {timer} from "rxjs";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [
    TabsService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'tabs__titles'
  }
})
export class TabsComponent extends UnsubscribeOnDestroyClass implements OnInit, AfterContentChecked {
  /**
   * */
  @ContentChildren(
      TabComponent
  ) tabs: QueryList<TabComponent>;

  constructor(
      private tabsService: TabsService,
  ) {
    super();
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.tabs.changes.pipe(
        map(
            () => this.tabs.toArray()
        ),
        startWith(this.tabs.toArray()),
        takeUntil(this.viewDestroy$),
    ).subscribe(
        (tabs) => {
          tabs.forEach(
              (tab, idx) => {
                tab.idx = idx;
              }
          );
        }
    )
  }

  ngAfterContentChecked(): void {
  }

}
