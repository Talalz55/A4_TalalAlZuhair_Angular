// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
    selector: 'app-find-books',
    templateUrl: './find-books.component.html',
    styleUrls: ['./find-books.component.css']
})
export class FindBooksComponent implements OnInit {
    searchTerm: string = '';
    books: Book[] = [];

    constructor(private bookService: BookService, private router: Router) { }

    ngOnInit(): void {
        this.searchBooks();
    }

    searchBooks(): void {
        if (this.searchTerm.trim() === '') {
            this.bookService.getAllBooks().subscribe(books => this.books = books);
        } else {
            this.bookService.searchBooksByTitle(this.searchTerm).subscribe(books => this.books = books);
        }
    }

    navigateToUpdate(id: number): void {
        this.router.navigate(['/update', id]);
    }

    navigateToDelete(id: number): void {
        this.router.navigate(['/delete', id]);
    }
}
