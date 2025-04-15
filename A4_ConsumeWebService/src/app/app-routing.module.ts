// Name: Talal Al Zuhair, Student ID: 991658377

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FindBooksComponent } from './find-books/find-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [
    { path: 'create', component: CreateBookComponent },
    { path: 'update/:id', component: UpdateBookComponent },
    { path: 'find', component: FindBooksComponent },
    { path: 'delete/:id', component: DeleteBookComponent },
    { path: '', redirectTo: '/find', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
