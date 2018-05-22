import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('5/21/2018 12:54:23')
      },
      { id: '2', text: 'Added Bootstrap', date: new Date('5/22/2018 9:33:23') },
      {
        id: '3',
        text: 'Added logs components',
        date: new Date('5/22/2018 12:00:23')
      }
    ];
  }

  getLogs() {
    return this.logs;
  }
}
