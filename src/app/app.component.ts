import { Component, ViewChild, ViewChildren } from '@angular/core';
import {ColumnOneComponent} from './column-one/column-one.component';
import { SharedEventsService } from './services/shared-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ColumnOneComponent) ColumnOneComponent: ColumnOneComponent;
  navbarOpen = false;

  constructor(private sharedEventsService: SharedEventsService) {}

toggleNavbar() {
  this.navbarOpen = true;
}
saveEffects() {

  this.sharedEventsService.emitSaveChangesEvent();

}


}
