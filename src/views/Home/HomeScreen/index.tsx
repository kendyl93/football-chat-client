import { FlatList, SafeAreaView, Text, View } from 'react-native';
import EmptyResult from '../../EmptyResult';
import { MatchRow } from '../MatchRow';
import { styles } from './styles';
import { ChatRoom } from '../../../../hooks';



export const HomeScreen = ({ navigation, matches, userName }: { matches: ChatRoom[], navigation: any, userName: string }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View><Text style={{ paddingTop: 8 }}>Hello: {userName}</Text></View>
                {matches.length > 0 ? <FlatList
                    style={styles.containerInner}
                    data={matches}
                    renderItem={({ item }: { item: ChatRoom }) => <MatchRow item={item} navigation={navigation} />}
                /> : <EmptyResult />}
            </View>
        </SafeAreaView>
    )
}