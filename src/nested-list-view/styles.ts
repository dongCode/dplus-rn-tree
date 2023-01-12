import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorContainer: {
    borderColor: 'rgb(84, 85, 86)',
    backgroundColor: 'rgb(237, 57, 40)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  errorText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 17,
    fontWeight: 'bold',
  },
  container: {
    width: 100,
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
});

export default styles;
