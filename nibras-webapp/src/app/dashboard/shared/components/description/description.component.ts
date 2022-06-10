import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() header: string = '';
  @Input() Description: string = '';
  @Input() showButtonbar: boolean;

  @Output() toggleAction = new EventEmitter<string>();;

  constructor() { }

  ngOnInit(): void {

    // Set Default slection for User view
    this.toggleAction.emit('list');
  }

  toggle(action: string): void {

    //emit the selected view action 
    this.toggleAction.emit(action);
  }

}
