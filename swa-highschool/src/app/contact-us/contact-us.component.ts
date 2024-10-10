import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'] // corrected styleUrls array
})
export class ContactUsComponent {
  showMessage = false;
  message!: string;

  constructor(private route: Router) {}

  sendMessage(event: Event) {
    event.preventDefault(); // prevent page reload
    this.showMessage = true;
    this.message = 'Your message has been sent!';
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 2000); // Optional: Redirect after 2 seconds
  }
}
