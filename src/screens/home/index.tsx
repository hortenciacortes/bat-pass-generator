import { StyleSheet, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Card from '../../components/card';
import Buttons from '../../components/buttons';
import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState({ label: '', isTypePrimary: true, action: copyPassword });

  function generatePassword(): void {
    let password = '';
    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        password += generateNumber();
      } else if (random === 1) {
        password += generateLetter();
      }
    }
    setPassword({ label: password, isTypePrimary: true, action: copyPassword });
  }

  function generateNumber() {
    return Math.floor(Math.random() * 10);
  }

  function generateLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function copyPassword() {
    Clipboard.setStringAsync(password.label);
  }

  const optionButtons = [
    {
      label: 'GENERATE',
      isTypePrimary: false,
      action: generatePassword,
    },
    {
      label: 'COPY',
      isTypePrimary: false,
      action: copyPassword,
    },

  ]

  return (
    <View style={styles.container}>
      <Card />
      <Buttons buttons={[password, ...optionButtons]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
});
