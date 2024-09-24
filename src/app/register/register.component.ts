import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signup(this.email, this.password).subscribe(
      response => {
        console.log('Inscription réussie');
        // Gérer la redirection vers une autre page ou afficher un message de succès
      },
      error => {
        console.log('Erreur lors de l\'inscription :', error);
        // Gérer les erreurs et afficher un message d'erreur approprié à l'utilisateur
      }
    );
  }
}
