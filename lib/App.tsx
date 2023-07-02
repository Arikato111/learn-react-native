import {Component, ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  Button,
  TouchableHighlight,
} from 'react-native';

type state = {
  isClick: boolean;
};

class App extends Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      isClick: false,
    };
  }

  onPressButton = () => {
    this.setState(state => {
      return {isClick: !state.isClick}
    });
  }
  clickMe() {
    Alert.alert('Thanks');
  }
  longClickMe() {
    Alert.alert('Long press');
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.clickMe}
          underlayColor={'gray'}
          onLongPress={this.longClickMe}>
          <View>
            <Image
              style={{width: 300, height: 100, resizeMode: 'center'}}
              source={require('../images/pic.jpg')}
            />
          </View>
        </TouchableHighlight>
        <Button
          title={this.state.isClick ? 'Clicked' : 'Click'}
          onPress={this.onPressButton}
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
});

export default App;
