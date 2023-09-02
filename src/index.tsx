import * as React from 'react';
import { View, StyleSheet } from 'react-native';

let SaffeCaptureComponent: any;
const loadComponent = async () => {
  const module = await require('./SaffeCaptureComponent');
  SaffeCaptureComponent = module.default;
};
loadComponent();

export default function SaffeCapture(props: any) {
  return (
    <View style={styles.container}>
      <SaffeCaptureComponent
        apiKey={props.apiKey}
        type={props.type}
        endToEnd={props.endToEnd}
        user={props.user}
        onClose={props.onClose}
        onFinish={props.onFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
