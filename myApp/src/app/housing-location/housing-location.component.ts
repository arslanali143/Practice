import { Component, Input } from '@angular/core';
import { Housinglocation } from '../../Interfaces/housinglocation';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../../Directives/highlight.directive';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, HighlightDirective],
  //templateUrl: './housing-location.component.html',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p appHighlight class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <p><a [routerLink]="['/details', housingLocation.id]">Learn More</a></p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
