import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';
import {TabsService} from "./@sub/@service/tabs/tabs.service";
import {TabContentComponent} from "./@sub/@view/tab-content/tab-content.component";
import {TabTitleComponent} from "./@sub/@view/tab-title/tab-title.component";
import {UnsubscribeOnDestroyClass} from "./@sub/@res/@class/unsubsctibe-on-destroy/unsubsctibe-on-destroy.class";
import {SingleTabService} from "./@sub/@service/single-tab/single-tab.service";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [
    SingleTabService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent extends UnsubscribeOnDestroyClass implements OnInit, OnDestroy {
  /**
   * */
  @ContentChild(TabContentComponent, {static: false}) tabContent!: TabContentComponent;

  /**
   * */
  @ContentChild(TabTitleComponent, {static: false}) tabTitle!: TabTitleComponent;

  /**
   * */
  @HostListener(
      'click'
  ) onClick () {
    this.tabService.setLastClicked(this.idx);
  }

  /**
   * */
  public get idx () {
    return this.singleTabService.idx;
  };
  public set idx (idx) {
    this.singleTabService.setCurrentIdx(idx);
  };

  constructor(
      private tabService: TabsService,
      private singleTabService: SingleTabService
  ) {
    super();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.tabService.markFirstIfNeedAfterDelete(this.idx);
  }
}
