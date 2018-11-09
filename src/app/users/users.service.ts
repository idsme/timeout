import { Injectable } from '@angular/core';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user =  <IUser>{
      settings : {
        name: 'I. Achterhof',
        hoursWorked: 9,
        workDays: [1, 1, 1, 1, 1, 0, 0],
        rate: 90,
        projectName: '999',
      },
      projects : [
        {
          name: 'EPO',
          clientCode: '998',
          rate: 90,
        },
        {
          name: 'project b',
          clientCode: '667',
          rate: 85,
        }
      ]
  };

  constructor() { }
}
