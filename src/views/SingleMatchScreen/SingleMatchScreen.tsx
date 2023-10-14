import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles'
import { FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import { Message } from './Message';
import { useSingleMatchScreen } from './hooks';

type SingleMatchScreen = {
    route: any
}

const SingleMatchScreen = ({ route }: SingleMatchScreen) => {
    const { chatMessages, messaginginputContainerHeight, setMessaginginputContainer, handleNewMessage, message, setMessage, user } = useSingleMatchScreen(route.params)

    return (
        <View style={styles.messagingscreen}>
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                {chatMessages && chatMessages[0] ? (
                    <FlatList
                        inverted
                        data={[...chatMessages].reverse()}
                        renderItem={({ item }) => {
                            return (
                                <Message item={item} user={user} />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    ""
                )}
            </View>

            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={messaginginputContainerHeight - 20}>
                <View style={styles.messaginginputContainer} onLayout={({ nativeEvent }) => {
                    const { height } = nativeEvent.layout
                    setMessaginginputContainer(height)
                }}>
                    <TextInput
                        style={styles.messaginginput}
                        value={message}
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
            </KeyboardAvoidingView>
        </View>
    )
}

export default SingleMatchScreen;