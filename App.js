import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigation(params) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle:{backgroundColor:"#351401"},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:"#351401",
        drawerActiveBackgroundColor:"#e4baa1"
      }}
    >
      <Drawer.Screen name="categories" component={CategoriesScreen} options={{
        title:'All Categories',
        drawerIcon:({ color, size }) => <Ionicons color={color} size={size} name="list"/>
      }}/>
      <Drawer.Screen name="favorites" component={FavoritesScreen}  options={{
        drawerIcon:({ color, size }) => <Ionicons color={color} size={size} name="star"/>

      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverViewScreen}
          />

          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            // ADDING ELEMENT IN THE HEADER OUTSIDE THE SCREEN
            // options={{
            //   headerRight: () => {
            //     return <Button title="Press Me" />;
            //   },
            // }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
