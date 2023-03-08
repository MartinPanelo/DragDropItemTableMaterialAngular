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

  drop(event: CdkDragDrop<string[]>) {
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
  }
}
