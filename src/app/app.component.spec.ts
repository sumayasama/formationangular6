import { LOCALE_ID } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

describe('AppComponent', () => {
  beforeEach(async(() => { // avant chaque it configure le module exactement comem sur app module
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        UiModule,
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'formationangular6'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('formationangular6');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent); // creattion nouveau component , test bed retourne un fuxtureElement
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement; // native element = recuperer des element native de DOM
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to formationangular6!'); // recuperer le text contenu dans h1
  // });
});
