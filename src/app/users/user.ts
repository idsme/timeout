import {IProject, ISettings, IUser} from './iuser';

// TODO IDSME Reorganize this
export class User implements IUser {
  projects: IProject[];
  settings: ISettings;
}

export class Project implements IProject {
  clientCode: string;
  name: string;
  rate: number;
}

export class Settings implements ISettings {
  hoursWorked: number;
  name: string;
  projectName: string;
  rate: number;
  workDays: number[];
}