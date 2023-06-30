import {Component, ReactNode} from 'react';
import {View, Text} from 'react-native';
import Component1 from './Component1';

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
        <Component1 title='Helloworld' />
      </View>
    );
  }
}

export default App;
