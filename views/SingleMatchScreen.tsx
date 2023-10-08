import React, { useEffect, useLayoutEffect, useState } from 'react';
import { styles } from '../utils/styles'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import MessageComponent from './MessageComponent';
import socket from '../utils/socket';
import { API_URL } from '../App';
import axios from 'axios';

const getRoomMessages = async (roomId: any, setMessages: any) => {
    try {
        const response = await axios.get(`${API_URL}:4001/api/message/${roomId}`);

        setMessages(response.data);
    } catch (error) {
        console.error(error)
    }
}

const SingleMatchScreen = ({ route }: any) => {
    const { teams, id } = route.params;
    const [chatMessages, setChatMessages] = useState<any[]>();
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("David");

    useLayoutEffect(() => {
        socket.emit('join-room', id, async () => await getRoomMessages(id, setChatMessages))
        // socket.emit("chat message", 'hello');
        // should get messages here
        console.log({ useLayoutEffect })
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
            user,
            timestamp: { hour, mins },
        });

        try {
            // await axios.post(`${API_URL}:4001/api/message/`, {
            //     roomId: id,
            //     senderName: user,
            //     senderId: `${user}-random-id`,
            //     message
            // })
            socket.emit("send room message", {
                roomId: id,
                senderName: user,
                senderId: `${user}-random-id`,
                message
            });
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <View style={styles.messagingscreen}>
            <Text>
                {teams}
            </Text>
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                {chatMessages && chatMessages[0] ? (
                    <FlatList
                        data={chatMessages}
                        renderItem={({ item }) => {
                            console.log({ item })
                            return (
                                <MessageComponent item={item} user={user} />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    ""
                )}
            </View>

            <View style={styles.messaginginputContainer}>
                <TextInput
                    style={styles.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable
                    style={styles.messagingbuttonContainer}
                    onPress={handleNewMessage}
                >
                    <View>
                        <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default SingleMatchScreen;