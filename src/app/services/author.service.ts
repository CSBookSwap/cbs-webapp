import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Page} from "../models/page";
import {Observable} from "rxjs";
import {Author} from "../models/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl: string = `${environment.apiUrl}/authors`;
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getAuthors(page: Page): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/${page.number}/${page.size}`);
  }

  public getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/${id}`);
  }

  public createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}`, author);
  }

  public updateAuthor(author: Author): boolean {
    var response: boolean = false;
    this.http.put(`${this.baseUrl}`, author)
      .subscribe(data => {
        data ? response = true : response = false;
      });
    return response;
  }

  public deleteAuthor(id: number): boolean {
    var response: boolean = false;
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(data => {
        data ? response = true : response = false;
      });
    return response;
  }
}
