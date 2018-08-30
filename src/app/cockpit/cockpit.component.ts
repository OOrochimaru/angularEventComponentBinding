import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //@Output() serverCreated  = new EventEmitter<{serverName: string, serverContent:string}>();
  //@Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>(); 
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContent: ElementRef; // 

  constructor() { }

  ngOnInit() {
  }

  onAddServer(valueFromHtml: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: valueFromHtml.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(valueFromHtml: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: valueFromHtml.value,
      blueprintContent: this.serverContent.nativeElement.value
    })
  }

}
