import * as io from "socket.io-client";
import { API_URL } from '../App'

const socket = io.connect(API_URL);
export default socket;