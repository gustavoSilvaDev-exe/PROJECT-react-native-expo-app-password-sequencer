import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    padding: 30,
    backgroundColor: '#4D4D4D'
  },
  inputContainer: {
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;