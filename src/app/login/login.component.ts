import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful');
        // Rediriger l'utilisateur vers une autre page ou afficher un message de succès
      },
      error => {
        console.log('Error during login:', error);
        // Gérer les erreurs et afficher un message d'erreur approprié à l'utilisateur
      }
    );
  }
}
