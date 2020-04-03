import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnOneComponent } from '../column-one/column-one.component';

@Component({
  selector: 'app-service-editor',
  templateUrl: './service-editor.component.html',
  styleUrls: ['./service-editor.component.css']
})
export class ServiceEditorComponent implements OnInit,AfterViewInit {

  @ViewChild(ColumnOneComponent) childData;
  message
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.message=this.childData.childVar;
  }

}
