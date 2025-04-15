// Name: Talal Al Zuhair, Student ID: 991658377
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer animate-footer">
      <div class="container">
        <p class="mb-0">© 2025 BookShelf</p>
        <p class="mb-0">Created by {{ name }} (Student ID: {{ studentId }})</p>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  name = 'Talal Al Zuhair';
  studentId = '991658377';
}