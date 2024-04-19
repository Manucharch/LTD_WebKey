import { Component, OnInit } from '@angular/core';
import { UnitConvertInterface } from './types/unit.convert.interface';

@Component({
  selector: 'app-convertations',
  templateUrl: './convertations.component.html',
  styleUrls: ['./convertations.component.scss'],
})
export class ConvertationsComponent implements OnInit {
  countries: string[] = ['აშშ', 'ევროპა'];

  countriesEN: string[] = ['USA', 'Europe'];

  unitConvert: UnitConvertInterface[] = [
    {
      country: 0,
      coeficients: [
        { unit: 'time', name: 'second', coeficient: 2 },
        { unit: 'length', name: 'mile', coeficient: 3 },
      ],
    },

    {
      country: 1,
      coeficients: [
        { unit: 'time', name: 'second', coeficient: 2 },
        { unit: 'length', name: 'yard', coeficient: 3 },
      ],
    },
  ];

  country: string = '';

  ngOnInit(): void {
    if (localStorage.getItem('language') == 'ge') {
      this.country = this.countries[0];
    } else {
      this.country = this.countriesEN[0];
    }
  }
}
