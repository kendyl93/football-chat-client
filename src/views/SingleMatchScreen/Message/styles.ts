import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    messageWrapper: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 15,
    },
    message: {
        backgroundColor: "#f5ccc2",
        padding: 15,
        borderRadius: 10,
        marginBottom: 2,
        marginLeft: 5
    },
    cchat: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        height: 80,
        marginBottom: 10,
    },
    cavatar: {
        marginRight: 15,
    },
    cusername: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold",
    },
    cmessage: {
        fontSize: 14,
        opacity: 0.7,
    },
    crightContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    ctime: {
        opacity: 0.5,
    },
    userAvatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

