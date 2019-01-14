import {Injectable} from '@angular/core';
import webstomp from 'webstomp-client';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WsTestService {

  private webstompClient: any;
  private socketjs: SockJS;

  constructor() {
    this.socketjs = new SockJS('http://localhost:7070/ws-poc/ws')

    this.socketjs.onopen = function () {
      console.log('open');
    };

    this.socketjs.onmessage = function (e) {
      console.log('message', e.data);
    };

    this.socketjs.onclose = function () {
      console.log('close');
    };

    console.info('webStompOver')
    this.webstompClient = webstomp.over(this.socketjs, {'protocols': ['v12.stomp']})


    let onConnect = function (frame) {
      console.log('Connected: ' + frame);
      this.webstompClient.subscribe('/topic/greetings', function (greeting) {
        console.info(JSON.parse(greeting.body).content);
      });
    }

    this.webstompClient.connect({'accept-version': '1.2'}, this.webStompOverConnect);

  }

  ngOnInit() {

  }

  onReplyB(frame) {
    console.info('onReplyB::' + frame)
  }

  sendAppEcho = () => {
    this.webstompClient.send('/app/echo', JSON.stringify({name: 'ws-name'}))
  }

  sendTopicEcho = () => {
    this.webstompClient.send('/topic/echo', JSON.stringify({name: 'ws-name'}))
  }

  subscribeAppTopic = () => {
    //this.webstompClient.subscribe('/topic/echo', this.onReplyB)
    //this.webstompClient.subscribe('/app/echo', this.onReplyB)
    this.webstompClient.subscribe('/user/queue/echo', this.onReplyB)
  }

  webStompOver = () => {

  }

  webstompClientConnect = () => {
    console.info('this.webstompClient.connect')

    let webStompOverConnect = (frame) => {
      console.info(frame)
    }

    let webStompOverConnectError = (frame) => {
      console.info(frame)
    }


    this.webstompClient.connect({}, webStompOverConnect, webStompOverConnectError)
  }

  webStompOverConnect = (frame) => {
    console.info(frame)
  }

  webStompOverConnectError = (frame) => {
    console.info(frame)
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
