import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // Make this component standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [] // Add any required imports for standalone component
})
export class AppComponent {
  title = 'Travel Website'; // Or whatever your title is
}
