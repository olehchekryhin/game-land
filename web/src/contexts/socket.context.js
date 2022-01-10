import { createContext } from "react";
import socket from "../services/socket";

const SocketContext = createContext(socket);

export default SocketContext;
