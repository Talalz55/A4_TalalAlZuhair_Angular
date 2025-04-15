// Name: Talal Al Zuhair, Student ID: 991658377
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-update-book',
    templateUrl: './update-book.component.html',
    styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
    book: Book = { id: 0, title: '', authorName: '', price: 0, quantity: 0 };
    edit: boolean = true; // Frontend-specific flag

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

    updateBook(): void {
        if (this.edit) {
            this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
                this.router.navigate(['/find']);
            });
        } else {
            alert('Update is disabled.');
        }
    }
}
