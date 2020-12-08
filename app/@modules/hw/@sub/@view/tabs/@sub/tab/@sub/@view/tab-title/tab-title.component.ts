import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {TabState} from "../../@res/@class/tab-state/tab-state";
import {SingleTabService} from "../../@service/single-tab/single-tab.service";

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTitleComponent extends TabState implements OnInit {
  /**
   *
   * */
  @HostBinding('class') get classes () {
      return `tabs__title ${this.active ? 'tabs__title--active' : ''}`
  }

  constructor(
      private singleTabService: SingleTabService,
      private cdRef: ChangeDetectorRef,
  ) {
    super(cdRef, singleTabService);
  }

  ngOnInit() {
    this.initActiveStateUpdater();
  }

}
