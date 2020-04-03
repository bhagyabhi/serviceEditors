import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {

  childVar:string="this is child var data";
  
  constructor() { }

  ngOnInit() {
  }

}
