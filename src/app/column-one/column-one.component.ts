import { Component, OnInit } from '@angular/core';
import { SharedEventsService } from '../services/shared-events.service';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {
 
  subscription: any;
  public show:boolean = false;

  toggle() {
    this.show = !this.show;
  }
 

  constructor(private sharedEventsService: SharedEventsService) { }
  addEffectFormDetails = false;
  listOfInterLogic = [];
  addInterLogicObj = {
    effectName: 'Select Effect Name',
    effectType: '',
    logics: [],
    tripPointProperties: {},
    id: 0
  };
  tripPointLogicObj = {
    effectName: 'Select Effect Name',
    effectType: 'Type'
  }
  interLogic = {
    logic1: '',
    logic2: '',
    logic3: ''
  }

  effectTypes = [];
  TripEffectTypes = [];

  ngOnInit() {
    this.subscription = this.sharedEventsService.getSaveChangesEvent()
      .subscribe(item => this.saveEffectsTrips());
  }
  saveEffectsTrips(){
    var logics = []
    for(var key in this.interLogic) {
      if(this.interLogic[key] != '')
      logics.push(this.interLogic[key]);
    }
    var id = Math.floor((Math.random() * 1000000000) + 1);
    this.addInterLogicObj.logics = logics;
    this.addInterLogicObj.id = id;
    this.addInterLogicObj.tripPointProperties = this.tripPointLogicObj;
    this.listOfInterLogic.push(JSON.parse(JSON.stringify(this.addInterLogicObj)));
    console.log(this.listOfInterLogic);
    

    this.show=false;
    
  }

 editCauseAndEffect = function(interLogicObj) {
  this.addInterLogicObj = interLogicObj;
 }

 
 

}
