import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-componentedos',
  templateUrl: './componentedos.component.html',
  styleUrls: ['./componentedos.component.css']
})
export class ComponentedosComponent {

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

/* 
  salenn(item:string) {
    console.log("evento CdkDragRelease --LISTA DOS")
    this.done = this.done.filter(aux => aux != item);
   
    
    console.log(this.done)
   } */



  entran(event: CdkDragDrop<string[]>) {
   
   
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
     
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
       
      );
   
    }
   

    console.log("evento CdkDragDrop  --LISTA DOS")
    console.log(this.done)
    console.log("Lista de donde biene el item")
   console.log(event.previousContainer.data)
   console.log("item que se traslado",event.previousContainer.data[event.currentIndex])
  }
}
