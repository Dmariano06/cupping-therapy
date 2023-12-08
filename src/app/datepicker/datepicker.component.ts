import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class DatepickerComponent {

  formData = {
    nom: '',
    email: '',
    reservation: '',
  };



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
