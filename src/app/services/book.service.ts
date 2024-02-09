import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Page} from "../models/page";
import {Observable} from "rxjs";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string = `${environment.apiUrl}/books`;
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getBooks(page: Page): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/${page.number}/${page.size}`);
  }

  public getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  public getBooksByAuthorId(authorId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/author/${authorId}`);
  }

  public getBooksByTagId(tagId: number, page: Page): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/tag/${tagId}/${page.number}/${page.size}`);
  }

  public createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}`, book);
  }

  public updateBook(book: Book): boolean {
    var response: boolean = false;
    this.http.put(`${this.baseUrl}`, book)
      .subscribe(data => {
        data ? response = true : response = false;
      });
    return response;
  }

  public deleteBook(id: number): boolean {
    var response: boolean = false;
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(data => {
        data ? response = true : response = false;
      });
    return response;
  }
}
