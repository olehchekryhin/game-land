import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import { Socket, Server } from 'socket.io';
import {GameService} from "./components/game/game.service";

@WebSocketGateway( { transports: ["polling", "websocket"]})
export class ChatGateway {
    constructor(private gameService: GameService) {}

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    handleMessage(client: Socket, data: any):void {
        this.server.to(data.meetingId).emit('message', data);

        if (data.gameId) {
            this.gameService.update(data.gameId, { gameId: data.meetingId, data: data.data, winner: data.winner, userId: data.userId } );
        }
    }

    @SubscribeMessage('joinRoom')
    handleJoinRoom(client: Socket, room: string):void {
        client.join(room);
        client.to(room).emit('joinedRoom', room);
    }

    @SubscribeMessage('leaveRoom')
    handleLeaveRoom(client: Socket, room: string):void {
        client.leave(room);
        client.to(room).emit('leftRoom', room);
    }
}
