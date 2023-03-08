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

  componentedos = ComponentedosComponent;


    salenn(item:string) {

    this.todo = this.todo.filter(aux => aux != item);
    console.log("evento CdkDragRelease")
    
    console.log(this.todo)
    console.log(item)
   }



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
   
    console.log("evento CdkDragDrop")
    console.log(event.container.data)
  }

}

