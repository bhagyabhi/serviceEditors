import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GraphicsEditorComponent } from './graphics-editor/graphics-editor.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { ServiceEditorComponent } from './service-editor/service-editor.component';
import { ColumnOneComponent } from './column-one/column-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';

const routes: Routes=[
  {path:"graphics",component:GraphicsEditorComponent},
  {path:"tag",component:TagListComponent},
  {path:"service",component:ServiceEditorComponent},
  { path: '', redirectTo: '/graphics', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphicsEditorComponent,
    TagListComponent,
    ServiceEditorComponent,
    ColumnOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CdkTreeModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
