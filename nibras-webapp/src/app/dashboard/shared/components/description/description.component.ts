import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  // define the input and output fields 
  // header title input
  @Input() header: string = '';

  //Desription input
  @Input() Description: string = '';

  //Toggle button enable/dissable input
  @Input() showButtonbar: boolean;

  // toggle actions output event 
  @Output() toggleAction = new EventEmitter<string>();;

  constructor() { }

  ngOnInit(): void {

    // Set Default slection for User view - otherwise the user page willbe shown as blank
    this.toggleAction.emit('list');
  }

  toggle(action: string): void {

    //emit the selected view action 
    this.toggleAction.emit(action);
  }

}
