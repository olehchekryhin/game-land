import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

export default socket;
