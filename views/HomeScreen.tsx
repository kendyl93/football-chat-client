import { FlatList, SafeAreaView, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, matches }: any) => {
    // console.log({ matches })
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={matches}
                renderItem={({ item }: any) =>
                    <View style={styles.matchRow}>
                        <Button
                            title={`${item?.homeTeam?.name} - ${item?.awayTeam?.name}`}
                            onPress={() => navigation.navigate('SingleMatch', { teams: `${item?.homeTeam?.name} - ${item?.awayTeam?.name}`, id: item.id })}
                        />
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a2a2a2',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600
    },
    matchRow: {
        marginTop: 16,
        borderWidth: 1
    }
});

export default HomeScreen;