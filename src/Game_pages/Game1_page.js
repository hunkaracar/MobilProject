import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

const Game1Page = () => {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const randomTime = Math.floor(Math.random() * 10) + 1; // 1 to 10 seconds
    const timeout = setTimeout(() => {
      setBackgroundColor('green');
      setStartTime(new Date().getTime());
    }, randomTime * 1000);

    return () => clearTimeout(timeout);
  };

  const handleButtonPress = () => {
    if (backgroundColor === 'green') {
      const endTime = new Date().getTime();
      const reaction = (endTime - startTime) / 1000; // Reaction time in seconds
      setReactionTime(reaction.toFixed(2)); // Rounded to 2 decimal places
      setBackgroundColor('red'); // Ekranı tekrar kırmızıya dön
    } else {
      // Handle premature button press
      alert('Beklemeden butona basıldı!');
    }
  };

  const restartGame = () => {
    setReactionTime(null);
    startGame();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Butona Bas ve Refleksini ölç!</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>BUTON</Text>
      </TouchableOpacity>
      {reactionTime && (
        <View>
          <Text style={styles.reactionTimeText}>
            Tepki süresi: {reactionTime} saniye
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
            <Text style={styles.restartButtonText}>Tekrar Oyna</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  reactionTimeText: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  restartButtonText: {
    fontSize: 16,
  },
});

export default Game1Page;
