  export interface ISettings {
    name: string;
    hoursWorked: number;
    workDays: number[];
    rate: number;
    projectName: string;
  }

  export interface IProject {
    name: string;
    clientCode: string;
    rate: number;
  }

  export interface IUser {
    settings: ISettings;
    projects: IProject[];
  }
