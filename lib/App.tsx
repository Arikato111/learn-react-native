import {Component, ReactNode} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type state = {
  inputText: string;
};

class App extends Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text>{this.state.inputText}</Text>
        <TextInput
          style={styles.inputText}
          value={this.state.inputText}
          onChangeText={(text) => this.setState({inputText: text})} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F352C0',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    minWidth: 100,
    maxWidth: 300,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default App;
