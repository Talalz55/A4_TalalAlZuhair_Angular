// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="card p-4 animate-card" [@cardAnimation]>
      <h2 class="mb-4 text-center">Create a New Book</h2>
      <form (ngSubmit)="createBook()" class="needs-validation" novalidate #bookForm="ngForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input id="title" [(ngModel)]="book.title" name="title" class="form-control animate-input" required>
          <div class="invalid-feedback">Please enter a title.</div>
        </div>
        <div class="mb-3">
          <label for="authorName" class="form-label">Author Name</label>
          <input id="authorName" [(ngModel)]="book.authorName" name="authorName" class="form-control animate-input" required>
          <div class="invalid-feedback">Please enter an author name.</div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price ($)</label>
          <input id="price" [(ngModel)]="book.price" name="price" type="number" step="0.01" min="0" class="form-control animate-input" required>
          <div class="invalid-feedback">Please enter a valid price.</div>
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity</label>
          <input id="quantity" [(ngModel)]="book.quantity" name="quantity" type="number" min="0" class="form-control animate-input" required>
          <div class="invalid-feedback">Please enter a quantity.</div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-success btn-lg" [disabled]="bookForm.invalid">Create Book</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .animate-input {
      transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .animate-input:focus {
      border-color: #28a745;
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }
  `]
})
export class CreateBookComponent implements AfterViewInit {
  book: Partial<Book> = { title: '', authorName: '', price: 0, quantity: 0 };

  constructor(private bookService: BookService, private router: Router) {}

  ngAfterViewInit(): void {
    const forms = document.querySelectorAll<HTMLFormElement>('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  createBook(): void {
    this.bookService.createBook(this.book as Book).subscribe({
      next: () => this.router.navigate(['/find']),
      error: (err) => alert('Failed to create book: ' + err.message)
    });
  }
}