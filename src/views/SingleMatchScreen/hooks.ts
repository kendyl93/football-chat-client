import { useEffect, useLayoutEffect, useState } from 'react';
import socket from '../../../utils/socket';
import { API_URL } from '../../../hooks';
import axios from 'axios';

interface ChatMessage {
    id: string;
    senderId: string;
    senderName: string;
    message: string;
    roomId: number;
}

const getRoomMessages = async (roomId: number, setMessages: (chatMessages: ChatMessage[]) => void) => {
    try {
        const response = await axios.get(`${API_URL}:4001/api/message/${roomId}`);

        setMessages(response.data);
    } catch (error) {
        console.error(error)
    }
}

export const useSingleMatchScreen = (params: any, userName: string) => {
    const { id } = params;
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>();
    const [message, setMessage] = useState("");
    const [messaginginputContainerHeight, setMessaginginputContainer] = useState(0)

    useLayoutEffect(() => {
        socket.emit('join-room', id, async () => await getRoomMessages(id, setChatMessages))
    }, []);


    // Set up a socket listener to listen for incoming messages
    useEffect(() => {
        // Listen for 'received-message' events from the server
        socket.on('received-message', (message) => {
            // Update the state with the new message
            setChatMessages((prevMessages) => [...prevMessages as any[], message]);
        });

        // Clean up the socket listener when the component unmounts
        return () => {
            socket.off('received-message');
        };
    }, []);



    const handleNewMessage = async () => {
        const hour =
            new Date().getHours() < 10
                ? `0${new Date().getHours()}`
                : `${new Date().getHours()}`;

        const mins =
            new Date().getMinutes() < 10
                ? `0${new Date().getMinutes()}`
                : `${new Date().getMinutes()}`;

        console.log({
            message,
            userName,
            timestamp: { hour, mins },
        });

        try {
            socket.emit("send room message", {
                roomId: id,
                senderName: userName,
                senderId: `${userName}-random-id`,
                message
            });

            setMessage('')
        } catch (error) {
            console.error(error)
        }
    };

    return {
        chatMessages, messaginginputContainerHeight, setMessaginginputContainer, handleNewMessage, message, setMessage
    }
}