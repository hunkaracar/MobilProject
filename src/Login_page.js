import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login_page = () => {

  // Kullanıcının girdiği ismi tutmak için state
  const [name, setName] = useState("");
  const navigation = useNavigation();

  // İsim inputunda değişiklik olduğunda çalışacak fonksiyon
  const handleNameChange = (text) => {
    setName(text);
  };

  // İsim gönderme işlemi buradaki değeri oyun seçme sayfasında kullanıyorum. => Hoşgeldiniz {isim}
  const handleSubmit = () => {
    console.log("Girilen isim:", name);
    navigation.navigate('game_choice' , {playerName: name});
  };

  // Arka plan resmi
  const image = { uri: 'https://e0.pxfuel.com/wallpapers/565/265/desktop-wallpaper-squid-game-season.jpg' };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleNameChange}
              value={name}
              placeholder="İsminizi girin"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Oyun Seçim ekranına gir"
              onPress={handleSubmit}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// Ekran boyutları alınıyor böylelikle dinamik bir şekilde telefondaki boyut farketmeksizin ona göre ayarlanır!
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  inputContainer: {
    width: '100%',
    marginBottom: windowHeight * 0.03,
  },
  input: {
    height: windowHeight * 0.06,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: windowWidth * 0.04,
    width: "100%",
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default Login_page;
