import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import LocationsListScreen from "../screens/LocationsListScreen";
import MapScreen from "../screens/MapScreen";

const MainNavigator = createStackNavigator({
    Search: SearchScreen,
    LocationsList : LocationsListScreen,
    Map : MapScreen
});

export default createAppContainer(MainNavigator);