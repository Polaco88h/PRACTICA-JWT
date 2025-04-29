import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  credentials = {
    username: '',
    password: '',
  };
  errorMessage: string = '';
  loading: HTMLIonLoadingElement | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() { }

  async login() {
    this.loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
    });
    await this.loading.present();

    this.authService.login(this.credentials).subscribe(
      (res) => {
        this.loading?.dismiss();
        if (res) {
          this.router.navigateByUrl('/secure');
        } else {
          this.errorMessage = 'Credenciales incorrectas.';
        }
      }, (err) => {
        this.loading?.dismiss();
        this.errorMessage = 'Error al iniciar sesión.';
        console.error(err);
      }
    );
  }
}


