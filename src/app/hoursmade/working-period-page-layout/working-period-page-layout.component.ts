import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/nl';
import {WorkedPeriod} from '../worked-period';
import {HoursMadeHelper} from '../hours-made-helper';
import {UsersService} from '../../users/users.service';
import {IUser} from '../../users/iuser';
import {Moment} from 'moment';

@Component({
  selector: 'ids-working-period-page-layout',
  templateUrl: './working-period-page-layout.component.html',
  styleUrls: ['./working-period-page-layout.component.scss']
})


export class WorkingPeriodPageLayoutComponent implements OnInit {

  @Input() _viewMode: 'EDIT' | 'PRINT';
  USER_SETTINGS: IUser;
  errorMessage: string;
  currentDate;
  periods: WorkedPeriod[];
  totalHours = 0;
  currentMonth: number;
  projectFound;
  earningsThisMonth: number;

  constructor(public userService: UsersService) {
  }

  ngOnInit() {

    this._viewMode = 'EDIT';
    this.USER_SETTINGS = this.userService.user;


    // Set local
    moment.locale('nl');
    // Get current Time.
    this.currentDate = moment();
    console.log(this.currentDate.format('LLLL'));

    console.log(`Days in Month:`, this.currentDate.daysInMonth());
    console.log(`Days of date:`, this.currentDate.date());
    console.log(`Days of week:`, this.currentDate.day());
    console.log(`Month of year:`, this.currentDate.month());
    console.log(`Year:`, this.currentDate.year());

    this.initWorkPeriodData(this.currentDate);

    this.calculate();

  }

  calculate() {
    this.totalHours = -13;
    let totalHoursNew = 0;
    this.periods.forEach((currentWorkingPeriod) => {
      totalHoursNew += currentWorkingPeriod.hoursWorked;
      this.totalHours = totalHoursNew;
    });
    this.earningsThisMonth = this.projectFound.rate * this.totalHours;
  }

  clear(dayOfTheMonth: number) {
    console.log(`clear>DayOfTheMonth`, dayOfTheMonth);

    HoursMadeHelper.convertDefaultFreePeriod(this.periods[dayOfTheMonth - 1]);
    this.calculate();
  }

  fill(dayOfTheMonth: number) {
    console.log(`reinit>DayOfTheMonth`, dayOfTheMonth);
    console.log(`Fill with>`, this.projectFound);

    this.periods[dayOfTheMonth - 1] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.projectFound.hoursWorked, this.projectFound.rateAtThatTime, dayOfTheMonth,
      this.currentDate.month(), this.currentDate.year());
    this.calculate();
  }

  plus(plus: number, currentPeriod: WorkedPeriod) {
    console.log(`plus>${plus}>`, currentPeriod);
    currentPeriod.hoursWorked += plus;
    this.calculate();
  }

  set viewMode(mode: 'EDIT' | 'PRINT'  ) {
    this._viewMode = mode;
  }

  get viewMode(): 'EDIT' | 'PRINT' {
    return this._viewMode;
  }

  togglePrint(): void {
    if (this.viewMode === 'PRINT') {
      this.viewMode = 'EDIT';
    } else {
      this.viewMode = 'PRINT';
    }
  }

  gotoPrevMonth1() {
    console.log('Caught prev Month Event');
    this.currentDate.month(this.currentDate.month() - 1);
    this.initWorkPeriodData(this.currentDate);
    this.calculate();
  }

  gotoNextMonth1() {
    console.log('Caught prev Month Event');
    this.currentDate.month(this.currentDate.month() + 1);
    this.initWorkPeriodData(this.currentDate);
    this.calculate();
  }

  private initWorkPeriodData(currentDate: Moment) {
    console.log('initWorkPeriodData', currentDate);
    // Create array of certain size currentMonth.
    this.periods = new Array<WorkedPeriod>(currentDate.daysInMonth());

    // Get project from config via code.
    const projectCodeDefault = this.USER_SETTINGS.settings.projectName;
    const projectsFound = this.USER_SETTINGS.projects.filter((data) => {
      return data.name === projectCodeDefault ? true : false;
    });


    // Check uniqueness.
    if (projectsFound.length === 1 ) {
      // Found one happy scenario.
      this.projectFound = projectsFound[0];
    } else if ( projectsFound.length === 0) {
      console.error('More then one projects has the same code or none where found.>', projectsFound);
      if (this.USER_SETTINGS.projects.length === 0) {
        console.error('You have to create a project first');
        this.errorMessage = 'App contains 0 projects';
      } else { // There are some projects but default one not is not set, take first one.
        this.projectFound = this.USER_SETTINGS.projects[0];
        // Correct and make first one found the default one.
        this.USER_SETTINGS.settings.projectName = this.projectFound.name;
      }
    }

    const beginOfMonthDate = currentDate;
    beginOfMonthDate.date(1);
    beginOfMonthDate.hour(0);
    beginOfMonthDate.second(0);
    beginOfMonthDate.minute(0);
    console.log(`beginOfMonthDate>`, beginOfMonthDate.format('LLLL'));
    console.log(`weekday>`, beginOfMonthDate.weekday()); // 6 == zondag.


    // TODO IDSME set settings from correct project in newly generated WorkedPeriod Objects
    for (let n = 0; n < this.periods.length; n++) {
      // TODO IDSME Date of 0 Day of Month
      const dayOfWeek = (n + beginOfMonthDate.weekday()) % 7;
      console.log(`Mod 7 of ${dayOfWeek} `, this.USER_SETTINGS.settings.workDays[dayOfWeek]);

      if (this.USER_SETTINGS.settings.workDays[dayOfWeek]) {

        // TODO IDSME Add a constructor to add just two objects.
        console.log(`Month of year:`, currentDate.month());
        console.log(`Year:`, currentDate.year());

        this.periods[n] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.projectFound.hoursWorked, this.projectFound.rate, n + 1,
          currentDate.month() + 1, currentDate.year());
      } else { // It is weekend on none working day.
        this.periods[n] = new WorkedPeriod(this.projectFound.name, this.projectFound.clientCode, this.projectFound.hoursWorked, this.projectFound.rate, n + 1,
          currentDate.month() + 1, currentDate.year());
        HoursMadeHelper.convertDefaultFreePeriod(this.periods[n]);
      }
    }

  }
}
