import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ComponentedosComponent } from '../componentedos/componentedos.component';

@Component({
  selector: 'app-componentetres',
  templateUrl: './componentetres.component.html',
  styleUrls: ['./componentetres.component.css']
})
export class ComponentetresComponent {
  arraytres = ['saltar', 'volar', 'usar angular', 'procastinar'];
   mistalista = false;



/* 
  salenn(item:string) {
    console.log("evento CdkDragRelease --LISTA TRES")

    if(this.mistalista == false){
      this.arraytres = this.arraytres.filter(aux => aux != item);
    
    
      console.log(this.arraytres)
    }
   

    this.mistalista = false;
   } */


   entran(event: CdkDragDrop<string[]>) {
   
  
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.mistalista = true;
    }    else {
     
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
       
      );
      
    }
   
   
    console.log("evento CdkDragDrop  --LISTA TRES")
    console.log(this.arraytres)
    console.log("Lista de donde biene el item")
   console.log(event.previousContainer.data)
   console.log("item que se traslado",event.previousContainer.data[event.currentIndex])
  }
 
}
