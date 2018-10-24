import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {MasterDataService} from '../masterdata/masterdata.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    this.masterDataService.getConfig().subscribe((data: IConfig) => {
      this.userAppConfig = data;
    });

      //{userName: ['Idsme', Validators.required],
    this.userConfigForm = this.fb.group(
      {hoursWorked: [44, Validators.required],
        rate: [100, Validators.required],
        projectName: ['Project C', Validators.required],
        clientName: ['SomeCLient C', Validators.required],
        workDays: this.createWeekDays()
      });
        //workDay1s: this.fb.array([ this.createWeekDays() ]),

    this.userConfigForm.addControl("userName", new FormControl('I. Achterhof', Validators.required));
  }

  createWeekDays(): FormGroup {
    return this.fb.group({
      ma: 1,
      di: 1,
      wo: 1,
      do: 1,
      vr: 0,
      za: 0,
      zo: 0
    });
  }

  public submit(): void {
    // Update the userAppConfig
    console.log("userConfig Form:>", this.userConfigForm.value);
    this.userAppConfig.user.settings.name = this.userConfigForm.value.username;
    this.userAppConfig.user.settings.hoursWorked = this.userConfigForm.value.hoursWorked;
    this.userAppConfig.user.settings.rate = this.userConfigForm.value.rate;
    this.userAppConfig.user.settings.projectName = this.userConfigForm.value.projectName;


    this.userAppConfig.user.settings.workDays[0] = this.userConfigForm.controls.workDays.controls.ma.value;
    this.userAppConfig.user.settings.workDays[1] = this.userConfigForm.controls.workDays.controls.di.value;
    this.userAppConfig.user.settings.workDays[2] = this.userConfigForm.controls.workDays.controls.wo.value;
    this.userAppConfig.user.settings.workDays[3] = this.userConfigForm.controls.workDays.controls.do.value;
    this.userAppConfig.user.settings.workDays[4] = this.userConfigForm.controls.workDays.controls.vr.value;
    this.userAppConfig.user.settings.workDays[5] = this.userConfigForm.controls.workDays.controls.za.value;
    this.userAppConfig.user.settings.workDays[6] = this.userConfigForm.controls.workDays.controls.zo.value;


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




