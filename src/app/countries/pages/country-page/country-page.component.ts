import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        // Si no hay un pais con ese alpha code, redirigimos al home
        if (!country) return this.router.navigate(['/']);

        // Si hay un pais lo almacenamos en una variable
        return (this.country = country);
      });
  }

  getLanguagesString(languages: { [key: string]: string }): string {
    return Object.values(languages).join(', ');
  }
}
