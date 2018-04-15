import {Label} from '../label.model';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-label-links',
  templateUrl: './label-links.component.html',
  styleUrls: ['./label-links.component.css']
})
export class LabelLinksComponent {

  @Input()
  label: Label;

  constructor() {}

}
