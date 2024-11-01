import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Button = {
  label: string;
  buttonType: string;
  action?: () => void;
};

type ButtonsProps = {
  buttons: Button[];
};

export default function Buttons({ buttons }: ButtonsProps) {
  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            button.buttonType === 'primary' ? styles.primary : styles.secondary
          ]}
          disabled={!button.action}
          onPress={button.action}
        >
          <Text style={button.buttonType === 'secondary' ? styles.secondary : null}>
            {button.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonStyle: {
    width: 240,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#E5BF3D',
  },
  secondary: {
    backgroundColor: '#000000',
    color: '#E5BF3D',
  },
});
