import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None;
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') elementss = {type: String, name: String, content: String}

  constructor() { }

  ngOnInit() {
  }


}
