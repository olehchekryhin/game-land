import { io } from "socket.io-client";
const ENDPOINT = "wss://stark-castle-88218.herokuapp.com/";
const socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

export default socket;
