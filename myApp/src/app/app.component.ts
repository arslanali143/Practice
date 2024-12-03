import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, HttpClientModule, LoginComponent],
  templateUrl: './app.component.html',
//   template: `
//   <main>
//     <a [routerLink]="['/']">
//       <header class="brand-name">
//         <img class="brand-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZu1KKQaophHSP8NtysRFz0jyWO49xwrKRAhf5nMLRfQ&s" alt="logo" aria-hidden="true" />
//       </header>
//     </a>
//     <section class="content">
//       <router-outlet></router-outlet>
//     </section>
//   </main>
// `,
  styleUrl: './app.component.css',
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppComponent {
  title = 'Home';
}
