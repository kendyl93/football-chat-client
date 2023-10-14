import React from 'react';
import { styles } from './styles'
import { FlatList, KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import { Message } from './Message';
import { useSingleMatchScreen } from './hooks';

type SingleMatchScreen = {
    route: any;
    userName: string
}

export const SingleMatchScreen = ({ route, userName }: SingleMatchScreen) => {
    const { chatMessages, messaginginputContainerHeight, setMessaginginputContainer, handleNewMessage, message, setMessage } = useSingleMatchScreen(route.params, userName)

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
                                <Message item={item} userName={userName} />
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