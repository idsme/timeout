import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {MasterDataService} from '../masterdata/masterdata.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public userAppConfig$: Observable<IConfig>;
  public userAppConfig: IConfig;

  public userConfigForm = null;

  constructor(public configService: ConfigService, public masterDataService: MasterDataService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.userAppConfig$ = this.masterDataService.getConfig();
    this.masterDataService.getConfig().subscribe((data: IConfig) => this.userAppConfig = data);

.
    // Setup form configuration
    this.userConfigForm = this.fb.group({username: ['Ids', Validators.required]});
  }

  public submit(): void {
    // Update the userAppConfig
    this.userAppConfig.user.settings.name = this.userConfigForm.value.username;
    // TODO IDSME store submitted settings in Config


    console.log('Submmitted:>', this.userConfigForm.value);
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


  export interface Settings {
    name: string;
    hoursWorked: number;
    workDays: number[];
    rate: number;
    projectName: string;
  }

  export interface Project {
    name: string;
    clientCode: string;
    rate: number;
  }

  export interface User {
    settings: Settings;
    projects: Project[];
  }

  export interface IConfig {
    user: User;
  }




