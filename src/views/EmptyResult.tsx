import { SafeAreaView, StyleSheet, Image } from 'react-native';
import { windowHeight } from '../constants';

const EmptyResult = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/dog-walk.png')} />
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