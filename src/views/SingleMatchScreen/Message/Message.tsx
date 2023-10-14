import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const Message = ({ item, userName }: any) => {
    const status = item.senderName !== userName;

    return (
        <View>
            <View
                style={
                    status
                        ? styles.messageWrapper
                        : [styles.messageWrapper, { alignItems: "flex-end" }]
                }
            >
                <View style={{ flexDirection: "row", alignItems: "center", maxWidth: '70%' }}>
                    <View style={styles.userAvatarContainer}>
                        <Ionicons
                            name='person-circle-outline'
                            size={30}
                            color='black'
                        />
                        <Text>{item.senderName.slice(0, 3)}</Text>
                    </View>
                    <View
                        style={
                            status
                                ? styles.message
                                : [styles.message, { backgroundColor: "rgb(194, 243, 194)" }]
                        }
                    >
                        <Text>{item.message}</Text>
                    </View>
                </View>
                <Text style={{ marginLeft: 40 }}>{item.time}</Text>
            </View>
        </View>
    );
}