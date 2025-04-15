// Name: Talal Al Zuhair, Student ID: 991658377
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FindBooksComponent } from './find-books/find-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
    declarations: [
        CreateBookComponent,
        UpdateBookComponent,
        FindBooksComponent,
        DeleteBookComponent,
        AppComponent,
    ],
    imports: [
        HeaderComponent,
        FooterComponent,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
