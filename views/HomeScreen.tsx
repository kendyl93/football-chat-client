import { FlatList, SafeAreaView, View, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import EmptyResult from './EmptyResult';

const Item = ({ item, navigation }: any) => {
    const handleNavigation = (item: any) => {
        navigation.navigate('SingleMatch', { teams: `${item?.homeTeam?.name} - ${item?.awayTeam?.name}`, id: item.id });
    };

    return (
        <View style={styles.matchRow} >
            <TouchableOpacity onPress={() => handleNavigation(item)}>
                <View style={styles.matchRowContent}>
                    <View>
                        <Image
                            style={styles.crest}
                            source={{
                                uri: item.homeTeam.crest
                            }}
                        />
                    </View>
                    <View><Text>{item.homeTeam.shortName} - {item.awayTeam.shortName}</Text></View>
                    <View>
                        <Image
                            style={styles.crest}
                            source={{
                                uri: item.awayTeam.crest,
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const HomeScreen = ({ navigation, matches }: any) => {
    // console.log({ matches })

    return (
        <SafeAreaView style={styles.container}>
            {matches.length > 0 ? <FlatList
                style={styles.containerInner}
                data={matches}
                renderItem={({ item }: any) => <Item item={item} navigation={navigation} />}
            /> : <EmptyResult />}
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
    containerInner: {
        width: '70%',
        minWidth: 300,
        margin: 'auto'
    },
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
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    crest: {
        width: 40,
        height: 40,
    }
});

export default HomeScreen;