import { Component, OnInit, Input } from '@angular/core';
import {ICat} from "../home.page";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent  implements OnInit {
  @Input() cat!: ICat;

  constructor() { }

  ngOnInit() {}

}
