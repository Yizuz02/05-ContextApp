import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, CounterScreen } from '../screens/';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator= () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Counter" component={CounterScreen} />
    </Tab.Navigator>
  );
}