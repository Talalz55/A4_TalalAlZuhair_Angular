// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
      <h2 class="mb-4 text-center">Update Book</h2>
      <form *ngIf="book.id" (ngSubmit)="updateBook()" class="needs-validation" novalidate #bookForm="ngForm">
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
          <button type="submit" class="btn btn-warning btn-lg" [disabled]="!edit || bookForm.invalid">Update Book</button>
        </div>
        <div class="text-center mt-3" *ngIf="!edit">
          <p class="text-danger">Editing is disabled for this book.</p>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .animate-input {
      transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .animate-input:focus {
      border-color: #ffc107;
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
    }
  `]
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
  book: Book = { id: 0, title: '', authorName: '', price: 0, quantity: 0 };
  edit: boolean = true;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBookById(id).subscribe({
      next: (data) => (this.book = data),
      error: () => alert('Book not found')
    });
  }

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

  updateBook(): void {
    if (this.edit) {
      this.bookService.updateBook(this.book.id, this.book).subscribe({
        next: () => this.router.navigate(['/find']),
        error: (err) => alert('Failed to update book: ' + err.message)
      });
    } else {
      alert('Update is disabled.');
    }
  }
}