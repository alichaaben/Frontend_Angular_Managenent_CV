import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.applyDefaultTheme();
    this.displayThemeButtons();
  }

  private applyDefaultTheme(): void {
    const defaultTheme = {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460"
    };
    this.setTheme(defaultTheme);
  }

  private setTheme(theme: any): void {
    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    if (theme.glassColor) {
      root.style.setProperty("--glass-color", theme.glassColor);
    }
  }

  private displayThemeButtons(): void {
    const themes = [
      { background: "#1A1A2E", color: "#FFFFFF", primaryColor: "#0F3460" }
    ];

    const btnContainer = document.querySelector(".theme-btn-container");
    if (btnContainer) {
      themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => this.setTheme(theme));
      });
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.LoginAuth();
    } else {
      console.log('Form is invalid');
    }
  }

  LoginAuth(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.authentificationService.login(username, password).subscribe({
      next: (data) => {
        this.authentificationService.loadUser(data);
        this.router.navigateByUrl("/Admin/dashboard")
      },
      error: (err) => {
        console.error('Erreur Authentification :', err);
      }
    });
  }
}
