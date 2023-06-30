import React, {Component} from 'react';
import {Text} from 'react-native';

type Component1Props = {
  title: string;
};

export default class Component1 extends Component<Component1Props> {
  render() {
    return (
      <Text style={{textAlign: 'center', color: 'white', fontSize: 24}}>
        {this.props.title}
      </Text>
    );
  }
}
