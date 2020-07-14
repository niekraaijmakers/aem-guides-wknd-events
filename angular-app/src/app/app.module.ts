
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpaAngularEditableComponentsModule } from '@adobe/cq-angular-editable-components';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { TextComponent } from './components/text/text.component';
import { ImageComponent } from './components/image/image.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ModelManagerService } from './model-manager.service';
import {AemAngularCoreWcmComponentsModule} from "aem-angular-core-wcm-components";
import {AemAngularCoreSpaWcmComponentsModule} from "aem-angular-core-spa-wcm-components";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TextComponent,
    ImageComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    AemAngularCoreWcmComponentsModule,
    AemAngularCoreSpaWcmComponentsModule,
    BrowserModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule
  ],
  providers: [ ModelManagerService,
    { provide: APP_BASE_HREF, useValue: '/' } ],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent, ListComponent, TextComponent]
})
export class AppModule { }
