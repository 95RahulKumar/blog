import { useSelector } from "react-redux";
import * as socketIo from 'socket.io-client';
import { RootState } from '@store/store';
import StorageHandler from "@shared/storageHandeler";
import { WebsocketNSP } from "@typings/web-socket";

export const useSocket = () => {
     const storageHandeler = new StorageHandler()
    const {userLoggedIn} = useSelector((state:RootState)=>state.user);
    const connectWBSocket = () =>{
            const activeBaseUrl = storageHandeler.activeBaseUrl;
            const baseUrl = activeBaseUrl?.replace('/api','')
            const socketUrl = `${baseUrl}`
            const newSocketUrl = new URL(socketUrl)
            console.log(newSocketUrl);
            
            const socket = socketIo.connect(newSocketUrl.href, {
              transports: ['websocket'],
              });
            console.log(socket);
    }
 return {connectWBSocket}
}