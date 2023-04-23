import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTracksScreen from './screens/SearchTracksScreen';
import UserTrackBaseScreen from './screens/UserTracksBaseScreen';


export default function Home() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Recherche" component={SearchTracksScreen} />
            <Tab.Screen name="Mes morceaux" component={UserTrackBaseScreen} />
        </Tab.Navigator>
    )

}
