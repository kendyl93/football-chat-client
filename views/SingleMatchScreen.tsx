import React, { useState } from 'react';
import { styles } from '../utils/styles'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import MessageComponent from './MessageComponent';

const SingleMatchScreen = ({ route }: any) => {
    const { teams } = route.params;
    const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Tomer",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "David",
        },
    ]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("David");

    const handleNewMessage = () => {
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
                {chatMessages[0] ? (
                    <FlatList
                        data={chatMessages}
                        renderItem={({ item }) => (
                            <MessageComponent item={item} user={user} />
                        )}
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