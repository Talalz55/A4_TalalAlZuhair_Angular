// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-find-books',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="card p-4">
      <h2 class="mb-4 text-center">Find Books</h2>
      <div class="row mb-4">
        <div class="col-md-8">
          <input type="text" [(ngModel)]="searchTerm" placeholder="Search by title" class="form-control" (input)="searchBooks()">
        </div>
        <div class="col-md-4">
          <button (click)="searchBooks()" class="btn btn-primary w-100">Search</button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-hover table-striped">
          <thead class="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let book of books" [ngStyle]="{'color': book.quantity > 0 ? 'green' : 'red'}">
              <td>{{ book.title }}</td>
              <td>{{ book.authorName }}</td>
              <td>\${{ book.price | number:'1.2-2' }}</td>
              <td>{{ book.quantity }}</td>
              <td>
                <a [routerLink]="['/update', book.id]" class="btn btn-sm btn-outline-warning me-2">Update</a>
                <a [routerLink]="['/delete', book.id]" class="btn btn-sm btn-outline-danger">Delete</a>
              </td>
            </tr>
            <tr *ngIf="books.length === 0">
              <td colspan="5" class="text-center">No books found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: []
})
export class FindBooksComponent implements OnInit {
  searchTerm: string = '';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.searchBooks();
  }

  searchBooks(): void {
    if (this.searchTerm.trim() === '') {
      this.bookService.getAllBooks().subscribe({
        next: (books) => (this.books = books),
        error: (err) => alert('Failed to fetch books: ' + err.message)
      });
    } else {
      this.bookService.searchBooksByTitle(this.searchTerm).subscribe({
        next: (books) => (this.books = books),
        error: (err) => alert('No books found: ' + err.message)
      });
    }
  }
}