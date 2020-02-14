import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a header at the top', () => {
    const section: DebugElement = fixture.debugElement.query(By.css('.fixed-top'));

    const element = section.query(By.directive(HeaderComponent));

    expect(element).toBeTruthy();
  });

  it('should contain a footer at the bottom', () => {
    const section: DebugElement = fixture.debugElement.query(By.css('.fixed-bottom'));
    
    const element = section.query(By.directive(FooterComponent));

    expect(element).toBeTruthy();
  });

  it('should contain a router outlet component in the middle', () => {
    const element = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(element).toBeTruthy();
  });
});
