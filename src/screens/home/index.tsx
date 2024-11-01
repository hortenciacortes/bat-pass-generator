import { StyleSheet, View } from 'react-native';
import Card from '../../components/card';
import Buttons from '../../components/buttons';

export default function Home() {
  function generatePassword(): void {
    console.log('generatePassword')
  }

  function copyPassword() {
    console.log('copyPassword')
  }

  const optionButtons = [
    {
      label: '776LApGj',
      buttonType: 'primary',
    },
    {
      label: 'GENERATE',
      buttonType: 'secondary',
      action: generatePassword,
    },
    {
      label: 'COPY',
      buttonType: 'secondary',
      action: copyPassword,
    },

  ]

  return (
    <View style={styles.container}>
      <Card />
      <Buttons buttons={optionButtons} />
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
