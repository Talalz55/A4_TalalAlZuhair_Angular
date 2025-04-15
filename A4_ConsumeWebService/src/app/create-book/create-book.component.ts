// Name: Your Name, Student ID: Your ID
import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
    book: Book = { id: 0, title: '', authorName: '', price: 0, quantity: 0 };

    constructor(private bookService: BookService, private router: Router) { }

    createBook(): void {
        this.bookService.createBook(this.book).subscribe(() => {
            this.router.navigate(['/find']);
        });
    }
}
