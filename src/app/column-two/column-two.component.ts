import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-two',
  templateUrl: './column-two.component.html',
  styleUrls: ['./column-two.component.css']
})
export class ColumnTwoComponent implements OnInit {

  showLogic2: boolean;
  showLogic3: boolean;
  subscription: any;
  // childVar:string="this is child var data";

  constructor() { }

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


 getTripPointChange = function(value){
  this.types.forEach(element => {
    if(element.hasOwnProperty(value.substring(3))) {
      this.TripEffectTypes = element[value.substring(3)];
    }
  });
  console.log(this.effectTypes);
}

}
