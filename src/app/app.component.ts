import { Component, HostListener } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cupping_therapy';
  formData = {
    nom: '',
    email: '',
    reservation: '',
  };
  isNavbarTransparent: boolean = true;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isNavbarTransparent = window.scrollY < 50;
  }
  constructor(private formService: ReservationService, private router: Router) {}

  submitForm() {
    this.formService.submitForm(this.formData).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);

        this.formData = {
          nom: '',
          email: '',
          reservation: '',
        };
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
    window.alert('Votre message a été envoyé avec succès ! Vous allez recevoir un mail de confirmation dans quelques instants. (Regardez bien vos spams) Nous recontacterons sous 24h pour la confirmation du rendez-vous');
    window.location.reload();
  }
  
  
}
