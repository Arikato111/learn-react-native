import React, {Component} from 'react';
import {Text} from 'react-native';

type Component1Props = {
  title: string;
  interval: number;
};

type state = {
  isVisible: boolean;
};

export default class BlinkText extends Component<Component1Props, state> {
  constructor(props: any) {
    super(props);
    this.state = {isVisible: true};
    setInterval(() => {
      this.setState({isVisible: !this.state.isVisible});
    }, this.props.interval);
  }
  render() {
    let display = this.state.isVisible ? this.props.title : '';
    return (
      <Text style={{textAlign: 'center', color: 'white', fontSize: 24}}>
        {display}
      </Text>
    );
  }
}
