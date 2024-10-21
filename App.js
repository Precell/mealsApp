import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:'#351401'},
              headerTintColor:'#fff',
              contentStyle:{
                backgroundColor:'#3f2f25'
              }}}>
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}

            options={{title:"Meals Category"}}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverViewScreen}
            // options={({route, navigation}) =>{
            //   const catId = route.params.categoryId
            //   return { 
            //     title: catId
            //   }
            // }}
          />
        </Stack.Navigator >
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
