import { FlatList, SafeAreaView, View, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ChatRoom } from '../../../hooks';



export const MatchRow = ({ item, navigation }: { item: ChatRoom, navigation: any }) => {
    const handleNavigation = (item: any) => {
        navigation.navigate('SingleMatch', { homeTeam: { shortName: item?.homeTeam?.shortName, crest: item?.homeTeam?.crest }, awayTeam: { shortName: item?.awayTeam?.shortName, crest: item?.awayTeam?.crest }, id: item.id });
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

const styles = StyleSheet.create({
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
