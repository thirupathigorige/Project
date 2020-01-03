import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AndroidComponent } from './components/pages/android/android.component';
import { JavaApplicationComponent } from './components/pages/java-application/java-application.component';
import { IOSComponent } from './components/pages/i-os/i-os.component';
import { QAAutomationComponent } from './components/pages/qaautomation/qaautomation.component';
import { AWSComponent } from './components/pages/aws/aws.component';
import { OracleComponent } from './components/pages/oracle/oracle.component';
import { DevOpsComponent } from './components/pages/dev-ops/dev-ops.component';
import { UIUXDesignComponent } from './components/pages/uiuxdesign/uiuxdesign.component';
import { DigitalProductMarketingComponent } from './components/pages/digital-product-marketing/digital-product-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    NotFoundComponent,
    ComingSoonComponent,
    FaqComponent,
    BlogComponent,
    BlogDetailsComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ContactComponent,
    IOSComponent,
    AndroidComponent,
    JavaApplicationComponent,
    QAAutomationComponent,
    AWSComponent,
    OracleComponent,
    DevOpsComponent,
    UIUXDesignComponent,
    DigitalProductMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
