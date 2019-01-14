import {Component, Inject, Injectable} from '@angular/core';
import {WsTestService} from "./ws-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'websocket-poc-front';
  private wsTestService: WsTestService;

  constructor(wsTestService: WsTestService) {
    this.wsTestService = wsTestService;
  }

  sendAppEcho() {
    this.wsTestService.sendAppEcho()
  }

  sendTopicEcho() {
    this.wsTestService.sendTopicEcho()
  }

  subscribeAppTopic() {
    this.wsTestService.subscribeAppTopic()
  }

  webStompOver() {
    this.wsTestService.webStompOver()
  }

  webstompClientConnect() {
    this.wsTestService.webstompClientConnect()
  }

}
