import {Component, ReactNode} from 'react';
import {View, Text} from 'react-native';
import BlinkText from './BlinkText';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#F352C0',
          justifyContent: 'center',
        }}>
        <BlinkText title="click here" interval={100} />
      </View>
    );
  }
}

export default App;
