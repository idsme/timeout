export class WorkedPeriod {

  projectName: string;
  clientCode?: string;
  hoursWorked: number;
  rateAtThatTime: number;
  dayOfTheMonth: number;
  monthOfTheYear: number;
  year: number;

  // Give everything a default value as Empty does not say as much as a filled in number or String, `defense programming`
  constructor(projectName = 'SomeProject', clientCode = 'SomeClientCode', hoursWorked = 8, rateAtThatTime= 80, dayOfTheMonth = -13, monthOfTheYear = -12, year = -1313) {
    this.projectName = projectName;
    this.clientCode = clientCode;
    this.hoursWorked = hoursWorked;
    this.rateAtThatTime = rateAtThatTime;
    this.dayOfTheMonth = dayOfTheMonth;
    this.monthOfTheYear = monthOfTheYear;
    this.year = year;
  }
}
