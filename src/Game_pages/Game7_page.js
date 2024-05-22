import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Game7_page = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [showNumber, setShowNumber] = useState(true); // Sayının gösterilip gösterilmeyeceğini kontrol etmek için kullanılan state
  const SHOW_TIME = 4000; // Sayının gösterilme süresi (milisaniye cinsinden)

  function generateRandomNumber() {
    return Math.floor(Math.random() * 26) + 5; // 5 ile 30 arasında rastgele sayı
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNumber(false); // Süre dolduktan sonra sayıyı göstermeyi durdur
      setMessage(`Kaç basamaklı olduğunu tahmin et: ${randomNumber}`);
    }, SHOW_TIME);

    return () => clearTimeout(timer);
  }, []);

  function checkUserInput() {
    if (userInput === randomNumber.toString()) {
      setMessage('Tebrikler! Doğru tahmin!');
      setRandomNumber(generateRandomNumber()); // Doğru tahmin durumunda yeni bir random sayı oluştur
      setShowNumber(true); // Yeni sayıyı göster
      setUserInput(''); // Kullanıcının tahminini sıfırla
    } else {
      setMessage('Üzgünüm, yanlış tahmin. Tekrar dene.');
    }
  }

  return (
    <View style={styles.container}>
      {showNumber && <Text style={styles.message}>{randomNumber}</Text>}
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        placeholder="Tahmininizi girin"
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        keyboardType="numeric"
      />
      <Button title="Kontrol Et" onPress={checkUserInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Game7_page;
