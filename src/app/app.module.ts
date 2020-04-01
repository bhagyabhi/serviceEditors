import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { GraphicsEditorComponent } from './graphics-editor/graphics-editor.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { ServiceEditorComponent } from './service-editor/service-editor.component';


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
    ServiceEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
