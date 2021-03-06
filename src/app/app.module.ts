import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IntroComponent} from './modals/intro/intro.component';
import {ProjectsComponent} from './modals/projects/projects.component';
import {AboutComponent} from './modals/about/about.component';
import {ContactComponent} from './modals/contact/contact.component';
import {NavbarComponent} from './modals/navbar/navbar.component';
import {FooterComponent} from './modals/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './pages/main/main.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ProjectViewComponent} from './pages/project/project-view.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
