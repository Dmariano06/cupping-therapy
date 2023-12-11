import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatDatepickerModule],
})
export class DatepickerComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedDate: ['', Validators.required],
      selectedTime: ['',[ Validators.required, this.timeRangeValidator('09:00', '19:00')]],
      message: ['', Validators.required],
    });
  }
  minTime = '09:00';
  maxTime = '19:00';
  timeRangeValidator(minTime: string, maxTime: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Si le champ est vide, la validation réussit
      }
  
      const selectedTime = control.value;
      const minTimeDate = new Date(`1970-01-01T${minTime}`);
      const maxTimeDate = new Date(`1970-01-01T${maxTime}`);
      const selectedTimeDate = new Date(`1970-01-01T${selectedTime}`);
  
      if (selectedTimeDate >= minTimeDate && selectedTimeDate <= maxTimeDate) {
        return null; // L'heure est dans la plage autorisée
      } else {
        return { timeRange: true }; // L'heure est en dehors de la plage autorisée
      }
    };

  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.http.post('https://cupping-bakcend-service.onrender.com/send-email', formData).subscribe(
        (response) => {
          console.log('Email sent successfully!', response);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
     
      
    }
   window.alert('Votre message a été envoyé avec succès ! Vous allez recevoir un mail de confirmation dans quelques instants. (Regardez bien vos spams) Nous recontacterons sous 24h pour la confirmation du rendez-vous');
   window.location.reload();
  }
}
