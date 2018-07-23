import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AbstractForm} from '../abstract-forms';

// TODO IDSME when gettings this data via the api from a single object all the variables are not used as we can use {{(personaldata | async).achterNaam}} etc.
@Component({
  selector: 'app-formexample-flex',
  templateUrl: './formexampleflex.component.html',
  styleUrls: ['./formexampleflex.component.scss']
})
export class FormExampleFlexComponent extends AbstractForm implements OnInit {

  // Test values of components so we don't have to fill in.
  aanhef = 'M';
  aanheffingen = [
    { id: 'M', name: 'Dhr.'},
    { id: 'V', name: 'Mevr.'}
  ];
  tussenVoegsel = 'van';
  initialen = 'I.';
  achterNaam = 'Achterhof';
  geboorteDag = '16';
  geboorteMaand = '04';
  geboorteJaar = '1974';
  telefoonNummer = '0641396022';

  constructor() {
    super();
  }

  ngOnInit() {
    this.initForm([
        'aanhef',
        'initialen',
        'tussenVoegsel',
        'achterNaam',
        'geboorteDag',
        'geboorteMaand',
        'geboorteJaar',
        'telefoonNummer',
        'e-mailAdres'
        ]);


    const controls = {
      'aanhef': new FormControl(),
      'initialen': new FormControl(),
      'tussenVoegsel': new FormControl(),
      'achterNaam': new FormControl(),
      'geboorteDag': new FormControl(),
      'geboorteMaand': new FormControl(),
      'geboorteJaar': new FormControl(),
      'telefoonNummer': new FormControl(),
      'e-mailAdres': new FormControl()
    };

    console.log('2.0', controls);
    this.form = new FormGroup(controls);

    console.log("2.1", this.form);

    this.onLoading();
  }

  loading() {
    console.log('LOADING SOME DATA OVERRIDE THIS IMPL to load Data into the from.');
    // Load some data from the service fill the member vars.
  }

  submit() {
    console.log('Submitting SOME DATA OVERRIDE THIS IMPL to load Data into the from.');
  }
}


