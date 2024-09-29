import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Ensure this matches your CSS file name
})
export class AppComponent {
  title = 'travel-website';

  // Toggle the menu
  toggleMenu() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('active');
    }
  }
}
