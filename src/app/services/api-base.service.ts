import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HeaderRequest } from '../interfaces/header-request.interface';
import { ErrorResponse } from '../interfaces/error-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, headers?: Array<HeaderRequest>, queryParams?: any): any {
    return this.httpClient
      .get<T>(url, {
        headers: this.getHeaderRequest(headers),
        params: queryParams as any,
        observe: 'response',
      })
      .pipe(
        catchError((errorHttpResponse) => this.handleError(errorHttpResponse))
      );
  }

  post<T>(
    url: string,
    headers?: Array<HeaderRequest>,
    data?: any,
    queryParams?: any
  ): Observable<HttpResponse<T>> {
    return this.httpClient.post<T>(url, data, {
      headers: this.getHeaderRequest(headers),
      params: queryParams as any,
      observe: 'response',
    });
  }

  put<T>(
    url: string,
    headers?: Array<HeaderRequest>,
    data?: any,
    queryParams?: any
  ): any {
    return this.httpClient
      .put<T>(url, data, {
        headers: this.getHeaderRequest(headers),
        params: queryParams as any,
        observe: 'response',
      })
      .pipe(
        catchError((errorHttpResponse) => this.handleError(errorHttpResponse))
      );
  }

  delete<T>(url: string, headers?: Array<HeaderRequest>): any {
    return this.httpClient
      .delete<T>(url, {
        headers: this.getHeaderRequest(headers),
        observe: 'response',
      })
      .pipe(
        catchError((errorHttpResponse) => this.handleError(errorHttpResponse))
      );
  }

  private handleError(errorHttpResponse: HttpErrorResponse): any {
    console.log(errorHttpResponse);
    const apiError: ErrorResponse = {
      status: 500,
      error: [{ code: '500', message: 'errors.internak.server.error' }],
    };
  }

  private getHeaderRequest(headers?: Array<HeaderRequest>): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (headers) {
      headers.forEach(
        ({ param, value }) => (httpHeaders = httpHeaders.set(param, value))
      );
    }

    return httpHeaders;
  }
}
