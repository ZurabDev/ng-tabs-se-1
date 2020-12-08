import {Injectable, NgModule} from "@angular/core";
import { TabsComponent } from './@sub/@view/tabs/tabs.component';
import { TabTitleComponent } from './@sub/@view/tabs/@sub/tab/@sub/@view/tab-title/tab-title.component';
import { TabContentComponent } from './@sub/@view/tabs/@sub/tab/@sub/@view/tab-content/tab-content.component';
import { TabComponent } from './@sub/@view/tabs/@sub/tab/tab.component';
import {CommonModule} from "@angular/common";
import { TabActiveDirective } from './@sub/@view/tabs/@sub/tab/@sub/@directive/tab-active/tab-active.directive';

@NgModule(
    {
        imports: [
            CommonModule
        ],
        exports: [
            TabsComponent,
            TabTitleComponent,
            TabContentComponent,
            TabActiveDirective,
            TabComponent
        ],
        declarations: [
            TabsComponent,
            TabTitleComponent,
            TabContentComponent,
            TabComponent,
            TabActiveDirective
        ],
    }
)
export class HwModule {

}