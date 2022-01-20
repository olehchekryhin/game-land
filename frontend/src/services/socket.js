import { io } from "socket.io-client";
// const ENDPOINT = "wss://stark-castle-88218.herokuapp.com/";
const ENDPOINT = "http://localhost:3000";
const socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });

export default socket;
