import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });
  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (log.id === curr.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (log.id === curr.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
