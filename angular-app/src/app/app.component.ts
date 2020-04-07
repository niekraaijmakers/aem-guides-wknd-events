import { Component } from '@angular/core';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import {
  AEMResponsiveGridComponent,
  AEMContainerComponent,
  MapTo,
  AEMParsysComponent, AEMExperiencefragmentVariationComponent
} from '@adobe/cq-angular-editable-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    ModelManager.initialize();
  }
}

MapTo('wknd-events/components/structure/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
MapTo('wcm/foundation/components/parsys')(AEMParsysComponent);
MapTo('wknd-events/components/content/experience-fragment')(AEMExperiencefragmentVariationComponent);
