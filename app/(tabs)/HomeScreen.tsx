import { Text, View } from '@/components/Themed';
import { Image, ScrollView, StyleSheet } from 'react-native';
// import { RootTabScreenProps } from "../types";
import Pin from '../../components/Pin';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin
          pin={{
            title: 'First Image',
            image:
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/9.jpeg',
          }}
        />
        <Pin
          pin={{
            title: 'Second Image',
            image:
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg',
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
