import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {
  AEMComponentDirective,
  AEMModelProviderComponent,
  AEMPageComponent
} from "@adobe/cq-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
import {HeaderComponent} from "./components/header/header.component";
import {CommonModule} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AEMPageComponent,
        PageComponent,
        HeaderComponent,
        AEMModelProviderComponent,
        AEMComponentDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('WKND Events - Angular App');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('WKND_');
  });
});
