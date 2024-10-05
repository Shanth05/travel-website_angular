import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ETicketComponent } from './e-ticket/e-ticket.component';
import { JourneyComponent } from './journey/journey.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'e-ticket', component: ETicketComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'contact', component: ContactComponent }
];

export const appConfig = {
  providers: [
    provideRouter(routes)  
  ]
};
