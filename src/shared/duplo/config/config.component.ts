import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {MasterDataService} from '../masterdata/masterdata.service';

export interface IConfig {
  someConfigItem1: string;
  someConfigItem2: string;
}

export interface ICountry {
  code: string;
  description: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public config: IConfig;
  public countries: ICountry[];
  public masterDataCountries: ICountry[];

  constructor(public configService: ConfigService, public masterDataService: MasterDataService) {
  }

  ngOnInit() {
    this.showConfig();
    this.showConfigCountry();
    this.showMasterDataCountries();
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: IConfig) => {
      this.config = data;
      console.log('Config Found contents:>', this.config);
    });
  }

  showConfigCountry() {
    this.configService.getConfigCountry().subscribe((country: ICountry[]) => {
      // Currently only one country is returned
      this.countries = country;
    });
  }

  // TODO IDSME substitute code above with this.
  public mapConfigData(data) {
    console.log('Mapping, Incomping Config Data:>', data);
    this.config = data;
    console.log('Result of mapping this.config:>', this.config);
  }

  private showMasterDataCountries() {
    this.masterDataService.get<ICountry[]>('countries.json').subscribe((data: ICountry[]) => {
      this.masterDataCountries = data;
      console.log(`Just read in the masterDataCountries:>${this.masterDataCountries}`);
      console.log(`Number of countries read in:>${this.masterDataCountries.length}`);
    });
  }
}

// TODO IDSME integrate this in to this example component.
//
// updateData(data) {
//   // do something framework-specific to update your component here.
// }
//
// onMount() {
//   const data$ = this.getData();
//   const cancelBtn = this.element.querySelector(‘.cancel-button’);
//   const rangeSelector = this.element.querySelector(‘.rangeSelector’);
//   const cancel$ = fromEvent(cancelBtn, 'click');
//   const range$ = fromEvent(rangeSelector, 'change').map(e => e.target.value);
//
//   const stop$ = merge(cancel$, range$.filter(x => x > 500))
//   this.subscription = data$.takeUntil(stop$).subscribe(data => this.updateData(data));
// }
//
// onUnmount() {
//   this.subscription.unsubscribe();
// }
