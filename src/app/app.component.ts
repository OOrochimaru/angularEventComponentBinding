import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  serverElements = [{type:'Server', name:'Smartdata', content:'Easy Day'},
  {type:'Server', name:'Smartdata', content:'Easy Day'}];
  

  onServerAdded(serverCreated: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'Server',
      name: serverCreated.serverName,
      content: serverCreated.serverContent
    });
  }

  onBlueprintAdded(blueprintAdded:{blueprintName: string, blueprintContent: string}){
    this.serverElements.push({
      type: 'Blueprint',
      name:blueprintAdded.blueprintName,
      content: blueprintAdded.blueprintContent
    })
  }
 
}
