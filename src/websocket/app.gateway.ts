import {
    SubscribeMessage,
    WebSocketServer,
    WebSocketGateway,
  } from '@nestjs/websockets';
  import { Socket, Server } from 'socket.io';
  
  @WebSocketGateway()
  export class Gateway {
    @WebSocketServer() server: Server;
  
    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: string): void {
      this.server.emit('message', payload);
    }
  }