
import React from 'react';
import { View, Text } from 'react-native';

const Welcome = (props) => {
  return (
      <View>
        <Text>
          Welcome to {props.code} - {props.name}
        </Text>
      </View>
  );
};

class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Text>These are my modules this semester:</Text>
          <Welcome code="C346" name="Mobile App Development" />
          <Welcome code="C105" name="Introduction to Programming" />
          <Welcome code="C337" name="Immersive Technologies" />
        </View>
    );
  }
}

export default ModuleInfo;
