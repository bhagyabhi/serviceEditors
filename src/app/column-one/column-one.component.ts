import { Component, OnInit } from '@angular/core';
import { SharedEventsService } from '../services/shared-events.service';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {
  showLogic2: boolean;
  showLogic3: boolean;
  subscription: any;
  // childVar:string="this is child var data";

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

  effectNames = ['Select Effect Name','AnalogIndicator', 'BinaryIndicator', 'BlockValve', 'CheckValve',
                  'Controller', 'ControlValve', 'FlowTransmitter', 'LevelTransmitter',
                  'LevelTransmitterBar', 'PressureTransmitter', 'Pump', 'Mixer',
                    'TemperatureTransmitter', 'ThreewayValve'];

  types = [
    {AnalogIndicator: ['AnaView', 'AnaMon']},
    {BinaryIndicator: ['BinView', 'BinMon']},
    {BlockValve: ['BinVlv', 'MonBinVlv']},
    {CheckValve: ['BinVlv', 'MonBinVlv']},
     {Controller: ['PIDCtrl']},
     {ControlValve: ['AnaVlv', 'MonAnaVlv']},
     {FlowTransmitter: ['AnaView', 'AnaMon']},
     {LevelTransmitter: ['AnaView', 'AnaMon']},
     {LevelTransmitterBar: ['AnaView', 'AnaMon']},
     {PressureTransmitter: ['AnaView', 'AnaMon']},
     {Pump: ['AnaDrv', 'MonAnaDrv']},
     {Mixer: ['BinDrv', 'MonBinDrv']},
     {TemperatureTransmitter: ['AnaView', 'AnaMon']},
     {ThreewayValve: ['AnaVlv', 'MonAnaVlv']}
  ]

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
    console.log(this.listOfInterLogic)
  }

  addLogic() {
   if(!this.showLogic2) this.showLogic2 = true;
   else this.showLogic3 = true;
  }

  
  logics = ['AND', 'OR', 'XOR', 'NAND', 'NOT'];

 getEffectChange = function(value){
    this.types.forEach(element => {
      if(element.hasOwnProperty(value.substring(3))) {
        this.effectTypes = element[value.substring(3)];
      }
    });
    console.log(this.effectTypes);
 }

 editCauseAndEffect = function(interLogicObj) {
  this.addInterLogicObj = interLogicObj;
 }

 getTripPointChange = function(value){
  this.types.forEach(element => {
    if(element.hasOwnProperty(value.substring(3))) {
      this.TripEffectTypes = element[value.substring(3)];
    }
  });
  console.log(this.effectTypes);
}

}
