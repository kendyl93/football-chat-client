import { Text } from 'react-native';

const SingleMatchScreen = ({ route }: any) => {
    const { teams } = route.params;

    return (
        <Text>
            {teams}
        </Text>
    )
}

export default SingleMatchScreen;