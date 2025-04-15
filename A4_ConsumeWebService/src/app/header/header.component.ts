// Name: Talal Al Zuhair, Student ID: 991658377
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark animate-nav">
      <div class="container flex-row">
        <a class="navbar-brand fw-bold" href="#">BookShelf</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/find" routerLinkActive="active" [routerLinkActiveOptions]="{exact: false}">Find Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/create" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Create Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .animate-nav {
      animation: fadeIn 0.5s ease-out;
    }
  `]
})
export class HeaderComponent {}