import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {

  saveChanges: EventEmitter<any> = new EventEmitter();

  constructor() { }

  emitSaveChangesEvent() {
    this.saveChanges.emit();
  }

  getSaveChangesEvent() {
    return this.saveChanges;
  }


}
