import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Team } from "../../types"

type MatchRowProps = {
    homeTeam: Team,
    awayTeam: Team
}

export const MatchRow = ({ homeTeam, awayTeam }: MatchRowProps) => {

    return <View style={styles.matchRowContent}>
        <View>
            <Image
                style={styles.crest}
                source={{
                    uri: homeTeam.crest
                }}
            />
        </View>
        <View><Text>{homeTeam.shortName} - {awayTeam.shortName}</Text></View>
        <View>
            <Image
                style={styles.crest}
                source={{
                    uri: awayTeam.crest,
                }}
            />
        </View>
    </View>
}