// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [RouterModule, CommonModule],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="card p-4 animate-card" *ngIf="book" [@cardAnimation]>
      <h2 class="mb-4 text-center">Delete Book</h2>
      <div class="alert alert-warning text-center">
        <p>Are you sure you want to delete "<strong>{{ book.title }}</strong>" by {{ book.authorName }}?</p>
      </div>
      <div class="d-flex justify-content-center gap-3">
        <button (click)="deleteBook()" class="btn btn-danger btn-lg">Delete</button>
        <a [routerLink]="['/find']" class="btn btn-secondary btn-lg">Cancel</a>
      </div>
    </div>
  `,
  styles: []
})
export class DeleteBookComponent implements OnInit {
  book: Book | null = null;

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

  deleteBook(): void {
    if (this.book && confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(this.book.id).subscribe({
        next: () => this.router.navigate(['/find']),
        error: (err) => alert('Failed to delete book: ' + err.message)
      });
    }
  }
}