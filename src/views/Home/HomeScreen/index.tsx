import { FlatList, SafeAreaView } from 'react-native';
import EmptyResult from '../../EmptyResult';
import { MatchRow } from '../MatchRow';
import { styles } from './styles';
import { ChatRoom } from '../../../../hooks';



export const HomeScreen = ({ navigation, matches }: { matches: ChatRoom[], navigation: any }) => {
    return (
        <SafeAreaView style={styles.container}>
            {matches.length > 0 ? <FlatList
                style={styles.containerInner}
                data={matches}
                renderItem={({ item }: { item: ChatRoom }) => <MatchRow item={item} navigation={navigation} />}
            /> : <EmptyResult />}
        </SafeAreaView>
    )
}