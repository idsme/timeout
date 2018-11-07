import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MasterDataService} from '../../shared/duplo/masterdata/masterdata.service';
import {User} from './user';



@Component({
  selector: 'ids-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userAppConfig: User;
  public userConfigForm = this.setupFormBuilderFormControls();

  constructor(public masterDataService: MasterDataService, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.masterDataService.getUser().subscribe((data: User) => {
      this.userAppConfig = data;
      // this.userConfigForm = this.setupFormControls();
      //this.userConfigForm = this.setupFormBuilderFormControls();
      // workDay1s: this.fb.array([ this.createWeekDays() ]),

      // this.userConfigForm.addControl('userName', new FormControl('shit', Validators.required));
    });
  }

  private setupFormBuilderFormControls() {
     return this.fb.group({
      hoursWorked: [44, Validators.required],
      rate: [100, Validators.required],
      projectName: ['Project C', Validators.required],
      clientName: ['SomeCLient C', Validators.required],
      userName: ['I. Achterhof', Validators.required],
      workDays: this.createWeekDays()
    });
  }

  private setupUserControl() {
    const result = new FormGroup({
      userName: new FormControl('D. Achterhof'),
    });
    return result;
  }

  // TODO IDSME TRY TO FIX THIS
  private setupFormControls() {
    const result = new FormGroup({
      userName: new FormControl('D. Achterhof'),
      clientName: new FormControl('EPO'),
      workDays: new FormGroup({
        ma: new FormControl(9),
        di: new FormControl(9),
        wo: new FormControl(13),
        do: new FormControl(9),
        vr: new FormControl(14),
        za: new FormControl(9),
        zo: new FormControl(9)
      })
    });
    return result;
  }

  createWeekDays(): FormGroup {
    return this.fb.group({
      ma: new FormControl(1),
      di: new FormControl(1),
      wo: new FormControl(1),
      do: new FormControl(1),
      vr: new FormControl(0),
      za: new FormControl(0),
      zo: new FormControl(0)
    });
  }

  public submit(): void {
    // Update the userAppConfig
    console.log("userConfig Form:>", this.userConfigForm.value);
    this.userAppConfig.settings.name = this.userConfigForm.value.username;
    this.userAppConfig.settings.hoursWorked = this.userConfigForm.value.hoursWorked;
    this.userAppConfig.settings.rate = this.userConfigForm.value.rate;
    this.userAppConfig.settings.projectName = this.userConfigForm.value.projectName;

    console.log("workDays", this.userConfigForm.controls.workDays);

    this.userAppConfig.settings.workDays[0] = this.userConfigForm.controls.workDays.controls.ma.value;
    this.userAppConfig.settings.workDays[1] = this.userConfigForm.controls.workDays.controls.di.value;
    this.userAppConfig.settings.workDays[2] = this.userConfigForm.controls.workDays.controls.wo.value;
    this.userAppConfig.settings.workDays[3] = this.userConfigForm.controls.workDays.controls.do.value;
    this.userAppConfig.settings.workDays[4] = this.userConfigForm.controls.workDays.controls.vr.value;
    this.userAppConfig.settings.workDays[5] = this.userConfigForm.controls.workDays.controls.za.value;
    this.userAppConfig.settings.workDays[6] = this.userConfigForm.controls.workDays.controls.zo.value;


    // TODO IDSME store submitted settings in Config
    console.log('Submmitted:>', this.userConfigForm.value);
  }
}




