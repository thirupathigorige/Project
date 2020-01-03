import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { IOSComponent } from "./components/pages/i-os/i-os.component";
import { AndroidComponent } from "./components/pages/android/android.component";
import { JavaApplicationComponent } from "./components/pages/java-application/java-application.component";
import { QAAutomationComponent } from "./components/pages/qaautomation/qaautomation.component";
import { OracleComponent } from "./components/pages/oracle/oracle.component";
import { AWSComponent } from "./components/pages/aws/aws.component";
import { DevOpsComponent } from "./components/pages/dev-ops/dev-ops.component";
import { UIUXDesignComponent } from "./components/pages/uiuxdesign/uiuxdesign.component";
import { DigitalProductMarketingComponent } from "./components/pages/digital-product-marketing/digital-product-marketing.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'service-details', component: ServiceDetailsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'iOS', component: IOSComponent },
    { path: 'Android', component: AndroidComponent },
    { path: 'Java-Application', component: JavaApplicationComponent },
    { path: 'QA & Automation', component: QAAutomationComponent },
    { path: 'AWS', component: AWSComponent },
    { path: 'Oracle', component: OracleComponent },
    { path: 'DevOps', component: DevOpsComponent },
    { path: 'UI&UX', component: UIUXDesignComponent },
    { path: 'Digital-Product-Marketing', component: DigitalProductMarketingComponent },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
