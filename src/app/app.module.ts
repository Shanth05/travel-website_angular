import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component'; // Import the new wrapper component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    RootComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [RootComponent] 
})
export class AppModule {}
