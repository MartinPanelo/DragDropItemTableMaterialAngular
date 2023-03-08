import {Component, ElementRef} from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDragExit, CdkDragRelease, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ComponentedosComponent } from '../componentedos/componentedos.component';
@Component({
  selector: 'app-componenteuno',
  templateUrl: './componenteuno.component.html',
  styleUrls: ['./componenteuno.component.css']
})
export class ComponenteunoComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

 






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
    console.log("evento CdkDragDrop  --LISTA UNO")
    console.log(this.todo)
    console.log("Lista de donde biene el item")
   console.log(event.previousContainer.data)
    
  }
  
}

