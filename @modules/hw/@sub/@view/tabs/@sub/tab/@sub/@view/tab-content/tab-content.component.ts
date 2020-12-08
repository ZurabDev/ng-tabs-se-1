import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TabState} from "../../@res/@class/tab-state/tab-state";
import {SingleTabService} from "../../@service/single-tab/single-tab.service";

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent extends TabState implements OnInit {
  /**
   * */
  @ViewChild('templateRef', {static: true}) templateRef: TemplateRef<any>;

  /**
   * */
  constructor(
      private singleTabService: SingleTabService,
      private cdRef: ChangeDetectorRef
  ) {
    super(cdRef, singleTabService);
  }

  ngOnInit() {
  }

}
