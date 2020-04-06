import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import {
  AEMComponentDirective,
  AEMModelProviderComponent,
  AEMPageComponent
} from "@adobe/cq-angular-editable-components";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "../../app-routing.module";

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PageComponent,
        AEMPageComponent,
        AEMModelProviderComponent,
        AEMComponentDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
