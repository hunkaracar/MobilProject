import { CheckBox, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Option_choice = ({ route }) => {

  // Seçilen oyunu takip etmek için state
  const [selectedGame, setSelectedGame] = useState(null);
  // Route'dan playerName'i al
  const { playerName } = route.params; // playerName prop'una erişim
  const navigation = useNavigation();

  // Oyun seçenekleri
  const games = [
    { id: 1, name: 'Refleks' },
    { id: 2, name: 'Hafıza' },
    { id: 3, name: 'Tek Çift Hafıza' },
    { id: 4, name: 'Aritmetik Hız' },
    { id: 5, name: 'Kutuyu Yakala' },
  ];

  // Oyun Seçimi
  const handleGameSelection = (gameId) => {
    setSelectedGame(gameId);
  };

  // Formu gönderme
  const handleSubmit = () => {
    // Seçilen oyuna göre yönlendirme yap
    if (selectedGame) {
      if (selectedGame === 1) {
        navigation.navigate('Game1_page');
      } 
      else if (selectedGame === 2) {
        navigation.navigate('Game2_page');
      }
      else if (selectedGame === 3) {
        navigation.navigate('Game3_page');
      }
      else if (selectedGame === 4) {
        navigation.navigate('Game4_page');
      }
      else if (selectedGame === 5) {
        navigation.navigate('Game5_page');
      }
      else {
        navigation.navigate('game_choice', { playerName, selectedGame });
      }
    } 
    else {
      alert('Lütfen bir oyun seçiniz.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.player_Name}>
        <Text style={styles.greeting}>Hoşgeldiniz, {playerName}</Text>
      </View>
      <View>
        <Text style={styles.specify_text}>Oynamak istediğiniz oyunu seçiniz</Text>
      </View>
      <View style={styles.content}>
        {games.map((game) => (  // Oyunlar listesini döngüye alır
          <TouchableOpacity key={game.id} onPress={() => handleGameSelection(game.id)}>
            <View style={styles.gameItem}>
              <CheckBox
                value={selectedGame === game.id}
                onValueChange={() => handleGameSelection(game.id)}
              />
              <Text style={styles.gameText}>{game.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Oyun Seç</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'crimson'
  },
  player_Name: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  gameText: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 50, 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  specify_text: {
    fontSize:20,
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 60,
    marginTop:50,
    color: 'white', 
  }
});

export default Option_choice;
