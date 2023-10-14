import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    matchRow: {
        marginTop: 16,
        borderWidth: 1,
        flexGrow: 1,
        width: '100%'
    },
    matchRowContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    crest: {
        width: 32,
        height: 32,
    }
});