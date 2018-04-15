import {Label} from '../label.model';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.css']
})
export class LabelItemComponent {

  @Input()
  label: Label;

  constructor() {}

}
