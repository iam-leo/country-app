import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(catchError((error) => of([])));
  }

  searchCountry(country: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${country}`)
      .pipe(catchError((error) => of([])));
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(catchError((error) => of([])));
  }
}
