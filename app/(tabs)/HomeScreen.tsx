import { Text, View } from '@/components/Themed';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import pins from '../../assets/data/pins';
import Pin from '../../components/Pin';

// import { RootTabScreenProps } from '../types';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>

        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});
