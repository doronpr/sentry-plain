import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: '<<DSN_HERE>>',
  // debug: true,
});
async function doTry() {
  console.error('bla');
  const e1 = new Error('inner')
  const e = new Error('TRY3', {cause: e1});
  Sentry.captureException(e, );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Try!' onPress={async () => await doTry()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
