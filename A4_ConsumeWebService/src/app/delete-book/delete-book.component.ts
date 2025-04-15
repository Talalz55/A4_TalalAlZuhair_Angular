// Name: Your Name, Student ID: Your ID
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-delete-book',
    templateUrl: './delete-book.component.html',
    styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
    book: Book | null = null;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id')!;
        this.bookService.getBookById(id).subscribe(data => {
            this.book = data;
        });
    }

    deleteBook(): void {
        if (this.book && confirm('Are you sure you want to delete this book?')) {
            this.bookService.deleteBook(this.book.id).subscribe(() => {
                this.router.navigate(['/find']);
            });
        }
    }
}
