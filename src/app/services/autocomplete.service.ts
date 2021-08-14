import { Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AutocompleteService implements OnInit {
  options: string[] = [
    'Tunis',
    'Ariana',
    'Ben Arous',
    'Mannouba',
    'Bizerte',
    'Nabeul',
    'Béja',
    'Jendouba',
    'Zaghouan',
    'Siliana',
    'Le Kef',
    'Sousse',
    'Monastir',
    'Mahdia',
    'Kasserine',
    'Sidi Bouzid',
    'Kairouan',
    'Gafsa',
    'Sfax',
    'Gabès',
    'Médenine',
    'Tozeur',
    'Kebili',
    'Ttataouine',
  ];
  constructor() {}

  ngOnInit() {
  }
  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
