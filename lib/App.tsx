import {Component, ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BlinkText from './BlinkText';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.textBold}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F352C0',
    justifyContent: 'center',
  },
  textBold: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default App;
