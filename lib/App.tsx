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
      return {isClick: !state.isClick};
    });
  };
  clickMe() {
    Alert.alert('Thanks');
  }
  longClickMe() {
    Alert.alert('Long press');
  }

  render(): ReactNode {
    let img = this.state.isClick
      ? require('../images/pic.jpg')
      : require('../images/pic2.png');
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.clickMe}
          underlayColor={'gray'}
          onLongPress={this.longClickMe}>
          <View>
            <Image
              style={{width: 300, height: 200, margin: 10, resizeMode: 'center', borderRadius: 10}}
              source={img}
            />
          </View>
        </TouchableHighlight>
        <Button title={'switch'} onPress={this.onPressButton} />
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
