import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnOneComponent } from '../column-one/column-one.component';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

@Component({
  selector: 'app-service-editor',
  templateUrl: './service-editor.component.html',
  styleUrls: ['./service-editor.component.css']
})
export class ServiceEditorComponent implements OnInit,AfterViewInit {

  //@ViewChild(ColumnOneComponent) childData;
  message;
  showCauseAndEffect: boolean;
  constructor() {
    this.dataSource.data = this.serviceData;
   }

  public serviceData = [
    {
      name: 'Service 1',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    },{
      name: 'Service 2',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    },{
      name: 'Service 3',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    },{
      name: 'Service 4',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    },{
      name: 'Service 5',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    },{
      name: 'Service 6',
      children: [
        {name: 'Aborted'},
        {name: 'Completed'},
        {name: 'Held'},
        {name: 'Resetting'},
        {name: 'Resuming'}
      ]
    }];

    public _transformer = (node: any, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level,
      };
    }

    /**
     * selectService
     */
    public selectService(node) {
      this.showCauseAndEffect = true;
    }

    public treeControl = new FlatTreeControl<any>(
      node => node.level, node => node.expandable);

  public treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  public hasChild = (_: number, node: any) => node.expandable;

  ngOnInit() {
  }
  ngAfterViewInit(){
    //this.message=this.childData.childVar;
  }

}
