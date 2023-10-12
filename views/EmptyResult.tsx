import { FlatList, SafeAreaView, View, Button, StyleSheet, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EmptyResult = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../assets/dog-walk.png')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a2a2a2',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
    },
    image: {
        height: 200,
        'min-height': windowHeight * 0.5,
        width: '100%',
        'max-width': 500
    }
});

export default EmptyResult;