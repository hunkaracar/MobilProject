import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_page from './src/Login_page';
import Option_choice from './src/Option_choice';
import Game1_page from './src/Game_pages/Game1_page';
import Game2_page from './src/Game_pages/Game2_page';
import Game3_page from './src/Game_pages/Game3_page';
import Game4_page from './src/Game_pages/Game4_page';
import Game5_page from './src/Game_pages/Game5_page';

/*
  Bu dosya, React Navigation kütüphanesini kullanarak uygulama içindeki ekranları yönetmek için bir yapı oluşturur.
  - NavigationContainer, uygulamanın genel navigasyon yapısını oluşturur.
  - Stack.Navigator, uygulama içindeki ekranları bir yığın şeklinde yönetir.
  - Stack.Screen, her bir ekranın tanımını ve özelliklerini belirtir.
  - initialRouteName, uygulama başladığında gösterilecek varsayılan ekranın adını belirtir.
*/


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Oyun Sayfasına Hoşgeldiniz" component={Login_page} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="game_choice" component={Option_choice} options={{headerTitleAlign:'center', headerTitle:"Oyun seçme sayfası"}}/>
        <Stack.Screen name='Game1_page' component={Game1_page} options={{headerTitleAlign:'center', headerTitle:"Game1"}} />
        <Stack.Screen name='Game2_page' component={Game2_page} options={{headerTitleAlign:'center', headerTitle:"Game2"}} />
        <Stack.Screen name='Game3_page' component={Game3_page} options={{headerTitleAlign:'center', headerTitle:"Game3"}} />
        <Stack.Screen name='Game4_page' component={Game4_page} options={{headerTitleAlign:'center', headerTitle:"Game4"}} />
        <Stack.Screen name='Game5_page' component={Game5_page} options={{headerTitleAlign:'center', headerTitle:"Game5"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


