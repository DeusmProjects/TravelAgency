import {Injectable} from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class WebSocketService {

  // tslint:disable-next-line:variable-name
  private _message: string;

  private _webSocketContext = new WebSocket(environment.websocket);

  constructor() { }
  get webSocketContext(): WebSocket {
    return this._webSocketContext;
  }

  set webSocketContext(value: WebSocket) {
    this._webSocketContext = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
