import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import pins from '../assets/data/pins';

const PinScreen = () => {
  const pin = pins[0];
  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin.image]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin.title}</Text>
        <Pressable
          onPress={goBack}
          style={[styles.backBtn, { top: insets.top + 20 }]}
        >
          <Ionicons name={'chevron-back'} size={35} color={'white'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: 'hidden',
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 35,
  },
  backBtn: {
    position: 'absolute',

    left: 20,
  },
});

export default PinScreen;
