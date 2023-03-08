import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { ComponenteunoComponent } from './componenteuno/componenteuno.component';
import { ComponentedosComponent } from './componentedos/componentedos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ComponentetresComponent } from './componentetres/componentetres.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteunoComponent,
    ComponentedosComponent,
    ComponentetresComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
