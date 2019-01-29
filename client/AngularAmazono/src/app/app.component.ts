import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAmazono';
  searchTerm = '';
  isCollapsed = true; // To check if mobile menu is expanded or collapsed for mobile view of app

  get token() {
    return localStorage.getItem('token'); // used for authentication feature
  }

  collapse() {
    this.isCollapsed = true; // used to make mobile menu collapse
  }

  closeDropdown(dropdown) {
    dropdown.close(); // used to close navbar dropdown
  }

  logout() { } // used for logout function

  search() { } // used for search function
}
