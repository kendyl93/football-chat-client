import { useState } from "react"
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles"

export const LoginScreen = ({ setIsLoggedIn, setUserName }: any) => {
    const [messaginginputContainerHeight, setMessaginginputContainer] = useState(0)

    return <View style={{ padding: 16 }}>
        <View style={{ padding: 16 }}><Text>Login with user name</Text>
        </View>

        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={messaginginputContainerHeight - 20}>
            <View style={styles.messaginginputContainer} onLayout={({ nativeEvent }) => {
                const { height } = nativeEvent.layout
                setMessaginginputContainer(height)
            }}>
                <TextInput
                    style={styles.messaginginput}
                    onChangeText={(value) => setUserName(value)}
                />
                <Pressable
                    style={styles.messagingbuttonContainer}
                    onPress={setIsLoggedIn}
                >
                    <View>
                        <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                    </View>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </View>
}