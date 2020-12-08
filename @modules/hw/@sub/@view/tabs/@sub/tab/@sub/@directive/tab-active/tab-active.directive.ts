import {ChangeDetectorRef, Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {TabState} from "../../@res/@class/tab-state/tab-state";
import {SingleTabService} from "../../@service/single-tab/single-tab.service";
import {distinctUntilChanged, takeUntil} from "rxjs/operators";

@Directive({
  selector: '[ifTabActive]'
})
export class TabActiveDirective extends TabState implements OnInit {
  constructor(
      private singleTabService: SingleTabService,
      private cdRef: ChangeDetectorRef,
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
  ) {
    super(cdRef, singleTabService);
  }

  ngOnInit() {
    this.active$.pipe(
        takeUntil(this.viewDestroy$),
    ).subscribe(
        (active) => {
          if (active) {
            this.viewContainer.createEmbeddedView(
                this.templateRef
            )
          } else {
            this.viewContainer.clear();
          }
        }
    )
  }
}
