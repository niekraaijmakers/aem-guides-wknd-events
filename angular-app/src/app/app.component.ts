import {Component, HostBinding} from '@angular/core';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import { AEMResponsiveGridComponent, AEMContainerComponent, MapTo } from '@adobe/cq-angular-editable-components';
import {
  NavigationV1Component,
  NavigationV1IsEmptyFn,
  BreadCrumbV2Component,
  BreadCrumbV2IsEmptyFn,
  ListV2Component,
  ListV2IsEmptyFn,
  TitleV2,
  TextV2,
  TeaserV1Component,
  SeparatorV1,
  ImageV2Component,
  DownloadV1Component,
  TeaserV1IsEmptyFn,
  TextV2IsEmptyFn,
  ImageV2IsEmptyFn,
  DownloadV1IsEmptyFn,
  ButtonV1IsEmptyFn,
  ButtonV1Component
} from "aem-angular-core-wcm-components";

import {
  ContainerV1Component,ContainerIsEmptyFn,
  CarouselV1Component,
  AccordionV1Component,
  TabsV2Component
} from "aem-angular-core-spa-wcm-components";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') class = 't-cmp-clean t-cmp-clean--light';

  constructor() {
    ModelManager.initialize();
  }
}


MapTo('core/wcm/components/teaser/v1/teaser')(TeaserV1Component, {emptyLabel:'TeaserV1', isEmpty:TeaserV1IsEmptyFn});
MapTo('wknd-events/components/content/core/navigation')(NavigationV1Component,{emptyLabel:'NavigationV1', isEmpty:NavigationV1IsEmptyFn});
MapTo('wknd-events/components/content/core/breadcrumb')(BreadCrumbV2Component,{emptyLabel:'BreadCrumbV2', isEmpty:BreadCrumbV2IsEmptyFn});
MapTo('wknd-events/components/content/core/list')(ListV2Component,{emptyLabel:'ListV2', isEmpty:ListV2IsEmptyFn});
MapTo('wknd-events/components/content/core/text')(TextV2,{emptyLabel:'TextV2', isEmpty:TextV2IsEmptyFn});
MapTo('wknd-events/components/content/core/title')(TitleV2);
MapTo('wknd-events/components/content/core/separator')(SeparatorV1);
MapTo('wknd-events/components/content/core/image')(ImageV2Component,{emptyLabel:'ImageV2', isEmpty:ImageV2IsEmptyFn});
MapTo('wknd-events/components/content/core/download')(DownloadV1Component,{emptyLabel:'DownloadV1', isEmpty:DownloadV1IsEmptyFn});
MapTo('wknd-events/components/content/core/container')(ContainerV1Component,{emptyLabel:'ContainerV1', isEmpty:ContainerIsEmptyFn});
MapTo('wknd-events/components/content/core/carousel')(CarouselV1Component,{emptyLabel:'CarouselV1', isEmpty:ContainerIsEmptyFn});
MapTo('wknd-events/components/content/core/accordion')(AccordionV1Component, {emptyLabel:'AccordionV1', isEmpty:ContainerIsEmptyFn});
MapTo('wknd-events/components/content/core/tabs')(TabsV2Component,{emptyLabel:'AccordionV1', isEmpty:ContainerIsEmptyFn});
MapTo('wknd-events/components/content/core/button')(ButtonV1Component, {emptyLabel: 'ButtonV1', isEmpty:ButtonV1IsEmptyFn});

MapTo('wknd-events/components/structure/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
