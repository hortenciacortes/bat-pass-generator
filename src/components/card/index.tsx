import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BAT PASS GENERATOR</Text>

      <Image 
        source={{uri: 'https://www.hatchwise.com/wp-content/uploads/2024/03/image-29.png'}}
        style={{ width: 200, height: 100 }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    backgroundColor: '#2a2a3e',
    padding: 20,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  text: {
    color: '#E5BF3D',
    fontSize: 24,
  }
});
